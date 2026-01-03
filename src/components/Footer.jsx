import React, { useState } from 'react';
import { useToast } from './Toast';

const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'API', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Templates', 'Webinars'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR'],
};

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            addToast('Please enter your email address', 'error');
            return;
        }

        if (!validateEmail(email)) {
            addToast('Please enter a valid email address', 'error');
            return;
        }

        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);

        addToast('Thanks for subscribing! Check your inbox for confirmation.', 'success');
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="container">
                {/* Newsletter Section */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                    borderRadius: '24px',
                    padding: '40px',
                    marginBottom: '60px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center'
                }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
                        Stay in the loop
                    </h3>
                    <p style={{ color: '#94a3b8', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px' }}>
                        Get product updates, company news, and more delivered to your inbox.
                    </p>
                    <form
                        onSubmit={handleNewsletterSubmit}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '12px',
                            justifyContent: 'center',
                            maxWidth: '480px',
                            margin: '0 auto'
                        }}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            style={{
                                flex: '1',
                                minWidth: '200px',
                                padding: '14px 20px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                color: 'white',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                            style={{ opacity: loading ? 0.7 : 1 }}
                        >
                            {loading ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '16px' }}>
                        No spam, unsubscribe at any time.
                    </p>
                </div>

                <div className="footer-grid">
                    {/* Brand */}
                    <div>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>Velox</span>
                        </a>
                        <p style={{ color: '#94a3b8', marginBottom: '24px', maxWidth: '280px', lineHeight: 1.7 }}>
                            Empowering teams to work smarter with intelligent automation and AI-powered insights.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {[
                                { letter: 'X', label: 'Twitter' },
                                { letter: 'G', label: 'GitHub' },
                                { letter: 'L', label: 'LinkedIn' }
                            ].map((social) => (
                                <a
                                    key={social.letter}
                                    href="#"
                                    title={social.label}
                                    className="glass"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#94a3b8',
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {social.letter}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 style={{ fontWeight: 600, color: 'white', marginBottom: '20px', fontSize: '0.9375rem' }}>{title}</h4>
                            <ul className="footer-links">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '32px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                        © 2026 Velox. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            background: '#10b981',
                            borderRadius: '50%',
                            animation: 'pulse 2s infinite'
                        }}></span>
                        <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
