import React, { useState, useEffect } from 'react';
import { useToast } from './Toast';

const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px'
            }}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(8px)'
            }}></div>

            {/* Modal Content */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '440px',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98))',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '32px',
                    animation: 'modalIn 0.3s ease'
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        padding: '8px'
                    }}
                >
                    <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Title */}
                {title && (
                    <h2 style={{
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '24px',
                        textAlign: 'center'
                    }}>
                        {title}
                    </h2>
                )}

                {children}
            </div>
        </div>
    );
};

// Auth Modal Component
export const AuthModal = ({ isOpen, onClose, mode = 'signin' }) => {
    const [currentMode, setCurrentMode] = useState(mode);
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();

    // Sync currentMode with the mode prop when it changes
    useEffect(() => {
        setCurrentMode(mode);
    }, [mode, isOpen]);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (currentMode === 'signup' && !formData.name) {
            newErrors.name = 'Name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setLoading(false);

        if (currentMode === 'signin') {
            addToast('Welcome back! You have signed in successfully.', 'success');
        } else {
            addToast('Account created! Welcome to Velox.', 'success');
        }

        onClose();
        setFormData({ email: '', password: '', name: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const inputStyle = (hasError) => ({
        width: '100%',
        padding: '14px 16px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: `1px solid ${hasError ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
        borderRadius: '12px',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease'
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={currentMode === 'signin' ? 'Welcome Back' : 'Create Account'}>
            <form onSubmit={handleSubmit}>
                {currentMode === 'signup' && (
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            style={inputStyle(errors.name)}
                        />
                        {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                    </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        style={inputStyle(errors.email)}
                    />
                    {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        style={inputStyle(errors.password)}
                    />
                    {errors.password && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.password}</span>}
                </div>

                <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ width: '100%', padding: '16px', opacity: loading ? 0.7 : 1 }}
                >
                    {loading ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <svg style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
                                <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        currentMode === 'signin' ? 'Sign In' : 'Create Account'
                    )}
                </button>

                <p style={{ textAlign: 'center', marginTop: '24px', color: '#94a3b8', fontSize: '0.875rem' }}>
                    {currentMode === 'signin' ? (
                        <>
                            Don't have an account?{' '}
                            <button
                                type="button"
                                onClick={() => setCurrentMode('signup')}
                                style={{ background: 'transparent', border: 'none', color: '#7f96fa', cursor: 'pointer', fontWeight: 500 }}
                            >
                                Sign up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button
                                type="button"
                                onClick={() => setCurrentMode('signin')}
                                style={{ background: 'transparent', border: 'none', color: '#7f96fa', cursor: 'pointer', fontWeight: 500 }}
                            >
                                Sign in
                            </button>
                        </>
                    )}
                </p>
            </form>
        </Modal>
    );
};

// Demo/Contact Modal Component
export const DemoModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
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
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const inputStyle = (hasError) => ({
        width: '100%',
        padding: '14px 16px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: `1px solid ${hasError ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
        borderRadius: '12px',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease'
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Schedule a Demo">
            <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '24px', marginTop: '-8px' }}>
                Get a personalized walkthrough of Velox
            </p>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        style={inputStyle(errors.name)}
                    />
                    {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Work Email"
                        style={inputStyle(errors.email)}
                    />
                    {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        style={inputStyle(errors.company)}
                    />
                    {errors.company && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.company}</span>}
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs (optional)"
                        rows={3}
                        style={{ ...inputStyle(false), resize: 'vertical', minHeight: '80px' }}
                    />
                </div>

                <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ width: '100%', padding: '16px', opacity: loading ? 0.7 : 1 }}
                >
                    {loading ? 'Submitting...' : 'Request Demo'}
                </button>
            </form>
        </Modal>
    );
};

export default Modal;
