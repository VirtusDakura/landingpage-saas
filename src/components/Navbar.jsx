import React, { useState, useEffect } from 'react';
import { AuthModal } from './Modal';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signin' });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#features', label: 'Features' },
        { href: '#how-it-works', label: 'How It Works' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#testimonials', label: 'Testimonials' },
    ];

    const openSignIn = () => setAuthModal({ isOpen: true, mode: 'signin' });
    const openSignUp = () => setAuthModal({ isOpen: true, mode: 'signup' });
    const closeAuthModal = () => setAuthModal({ isOpen: false, mode: 'signin' });

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: scrolled ? '16px 0' : '24px 0',
                background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'all 0.3s ease'
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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

                    {/* Desktop Navigation */}
                    <div className="desktop-nav" style={{ alignItems: 'center', gap: '32px' }}>
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="desktop-nav" style={{ alignItems: 'center', gap: '16px' }}>
                        <button className="btn-secondary" style={{ padding: '10px 24px' }} onClick={openSignIn}>
                            Sign In
                        </button>
                        <button className="btn-primary" style={{ padding: '10px 24px' }} onClick={openSignUp}>
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="mobile-menu-btn"
                    >
                        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="container" style={{ marginTop: '16px' }}>
                        <div className="glass" style={{ borderRadius: '16px', padding: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="nav-link"
                                        style={{ fontSize: '1.125rem' }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <div style={{ paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <button className="btn-secondary" style={{ width: '100%' }} onClick={() => { openSignIn(); setMobileMenuOpen(false); }}>
                                        Sign In
                                    </button>
                                    <button className="btn-primary" style={{ width: '100%' }} onClick={() => { openSignUp(); setMobileMenuOpen(false); }}>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <AuthModal
                isOpen={authModal.isOpen}
                onClose={closeAuthModal}
                mode={authModal.mode}
            />
        </>
    );
};

export default Navbar;
