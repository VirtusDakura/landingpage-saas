import { useState } from 'react';
import { useToast } from './Toast';
import { validateEmail } from '../utils/validation';
import useInView from '../hooks/useInView';

const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'API', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Templates', 'Webinars'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR'],
};

const socialLinks = [
    {
        label: 'Twitter',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
];

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();
    const [ref, isInView] = useInView();

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        if (!email) { addToast('Please enter your email address', 'error'); return; }
        if (!validateEmail(email)) { addToast('Please enter a valid email address', 'error'); return; }
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        addToast('Thanks for subscribing! Check your inbox for confirmation.', 'success');
        setEmail('');
    };

    return (
        <footer className="footer" ref={ref}>
            <div className="container">
                <div className={`newsletter-section reveal ${isInView ? 'visible' : ''}`}>
                    <h3 className="newsletter-title">Stay in the loop</h3>
                    <p className="newsletter-subtitle">
                        Get product updates, company news, and more delivered to your inbox.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="newsletter-form" noValidate>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email" className="newsletter-input" aria-label="Email for newsletter" />
                        <button type="submit" className="btn-primary" disabled={loading}
                            style={{ opacity: loading ? 0.7 : 1 }}>
                            {loading ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                    <p className="newsletter-note">No spam, unsubscribe at any time.</p>
                </div>

                <div className={`footer-grid reveal ${isInView ? 'visible' : ''}`}>
                    <div>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }} aria-label="Velox Home">
                            <div className="logo-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="logo-text">Velox</span>
                        </a>
                        <p className="card-description" style={{ marginBottom: '24px', maxWidth: '280px' }}>
                            Empowering teams to work smarter with intelligent automation and AI-powered insights.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social) => (
                                <a key={social.label} href="#" title={social.label} className="social-link glass"
                                    aria-label={`Follow us on ${social.label}`}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="footer-column-title">{title}</h4>
                            <ul className="footer-links">
                                {links.map((link) => (
                                    <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">© 2026 Velox. All rights reserved.</p>
                    <div className="footer-status">
                        <span className="status-dot"></span>
                        <span className="status-text">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
