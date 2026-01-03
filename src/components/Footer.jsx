import React from 'react';

const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'API', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Templates', 'Webinars'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR'],
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
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
                            {['T', 'G', 'L'].map((letter) => (
                                <a
                                    key={letter}
                                    href="#"
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
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    {letter}
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
                                        <a href="#">{link}</a>
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
