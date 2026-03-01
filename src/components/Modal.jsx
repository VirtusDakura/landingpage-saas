import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useToast } from './Toast';
import { validateEmail } from '../utils/validation';

const Modal = ({ isOpen, onClose, children, title }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') { onClose(); return; }
            if (e.key !== 'Tab') return;

            const modal = modalRef.current;
            if (!modal) return;

            const focusable = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) { last.focus(); e.preventDefault(); }
            } else {
                if (document.activeElement === last) { first.focus(); e.preventDefault(); }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        const timer = setTimeout(() => {
            if (modalRef.current) {
                const firstInput = modalRef.current.querySelector('input');
                if (firstInput) firstInput.focus();
            }
        }, 100);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timer);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            onClick={onClose}
        >
            <div className="modal-backdrop"></div>
            <div ref={modalRef} className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
                {children}
            </div>
        </div>,
        document.body
    );
};

export const AuthModal = ({ isOpen, onClose, mode = 'signin' }) => {
    const [currentMode, setCurrentMode] = useState(mode);
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();

    useEffect(() => { setCurrentMode(mode); }, [mode, isOpen]);

    useEffect(() => {
        if (!isOpen) { setFormData({ email: '', password: '', name: '' }); setErrors({}); }
    }, [isOpen]);

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        if (currentMode === 'signup' && !formData.name) newErrors.name = 'Name is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        addToast(currentMode === 'signin' ? 'Welcome back! You have signed in successfully.' : 'Account created! Welcome to Velox.', 'success');
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={currentMode === 'signin' ? 'Welcome Back' : 'Create Account'}>
            <form onSubmit={handleSubmit} noValidate>
                {currentMode === 'signup' && (
                    <div className="form-group">
                        <label className="form-label" htmlFor="auth-name">Full Name</label>
                        <input id="auth-name" type="text" name="name" value={formData.name} onChange={handleChange}
                            placeholder="John Doe" className={`form-input ${errors.name ? 'error' : ''}`} autoComplete="name" />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                )}
                <div className="form-group">
                    <label className="form-label" htmlFor="auth-email">Email Address</label>
                    <input id="auth-email" type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="you@example.com" className={`form-input ${errors.email ? 'error' : ''}`} autoComplete="email" />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
                <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label className="form-label" htmlFor="auth-password">Password</label>
                    <input id="auth-password" type="password" name="password" value={formData.password} onChange={handleChange}
                        placeholder="••••••••" className={`form-input ${errors.password ? 'error' : ''}`}
                        autoComplete={currentMode === 'signin' ? 'current-password' : 'new-password'} />
                    {errors.password && <span className="form-error">{errors.password}</span>}
                </div>
                <button type="submit" className="btn-primary" disabled={loading}
                    style={{ width: '100%', padding: '16px', opacity: loading ? 0.7 : 1 }}>
                    {loading ? (
                        <span className="spinner">
                            <svg fill="none" viewBox="0 0 24 24">
                                <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Processing...
                        </span>
                    ) : (currentMode === 'signin' ? 'Sign In' : 'Create Account')}
                </button>
                <p className="form-footer">
                    {currentMode === 'signin' ? (
                        <>Don't have an account?{' '}
                            <button type="button" onClick={() => setCurrentMode('signup')} className="form-switch-btn">Sign up</button></>
                    ) : (
                        <>Already have an account?{' '}
                            <button type="button" onClick={() => setCurrentMode('signin')} className="form-switch-btn">Sign in</button></>
                    )}
                </p>
            </form>
        </Modal>
    );
};

export const DemoModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();

    useEffect(() => {
        if (!isOpen) { setFormData({ name: '', email: '', company: '', message: '' }); setErrors({}); }
    }, [isOpen]);

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.company) newErrors.company = 'Company name is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        addToast('Demo request submitted! Our team will contact you within 24 hours.', 'success');
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Request a Demo">
            <p className="modal-subtitle">Get a personalized walkthrough of Velox</p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Your Name" className={`form-input ${errors.name ? 'error' : ''}`} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="Work Email" className={`form-input ${errors.email ? 'error' : ''}`} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                        placeholder="Company Name" className={`form-input ${errors.company ? 'error' : ''}`} />
                    {errors.company && <span className="form-error">{errors.company}</span>}
                </div>
                <div className="form-group" style={{ marginBottom: '24px' }}>
                    <textarea name="message" value={formData.message} onChange={handleChange}
                        placeholder="Tell us about your needs (optional)" rows={3}
                        className="form-input" style={{ resize: 'vertical', minHeight: '80px' }} />
                </div>
                <button type="submit" className="btn-primary" disabled={loading}
                    style={{ width: '100%', padding: '16px', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Submitting...' : 'Request Demo'}
                </button>
            </form>
        </Modal>
    );
};

export default Modal;
