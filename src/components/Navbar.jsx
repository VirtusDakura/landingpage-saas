import { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import useActiveSection from '../hooks/useActiveSection';

const sectionIds = ['features', 'how-it-works', 'pricing', 'testimonials'];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { openAuth } = useModal();
    const activeSection = useActiveSection(sectionIds);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#features', label: 'Features', id: 'features' },
        { href: '#how-it-works', label: 'How It Works', id: 'how-it-works' },
        { href: '#pricing', label: 'Pricing', id: 'pricing' },
        { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
            padding: scrolled ? '16px 0' : '24px 0',
            background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }} aria-label="Velox Home">
                    <div className="logo-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="logo-text">Velox</span>
                </a>

                <div className="desktop-nav" style={{ alignItems: 'center', gap: '32px' }}>
                    {navLinks.map((link) => (
                        <a key={link.id} href={link.href}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            aria-current={activeSection === link.id ? 'true' : undefined}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="desktop-nav" style={{ alignItems: 'center', gap: '16px' }}>
                    <button className="btn-secondary" style={{ padding: '10px 24px' }} onClick={() => openAuth('signin')}>Sign In</button>
                    <button className="btn-primary" style={{ padding: '10px 24px' }} onClick={() => openAuth('signup')}>Get Started</button>
                </div>

                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn"
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
                    <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="container" style={{ marginTop: '16px' }}>
                    <div className="glass" style={{ borderRadius: '16px', padding: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {navLinks.map((link) => (
                                <a key={link.id} href={link.href}
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    style={{ fontSize: '1.125rem' }} onClick={() => setMobileMenuOpen(false)}>
                                    {link.label}
                                </a>
                            ))}
                            <div style={{ paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <button className="btn-secondary" style={{ width: '100%' }} onClick={() => { openAuth('signin'); setMobileMenuOpen(false); }}>Sign In</button>
                                <button className="btn-primary" style={{ width: '100%' }} onClick={() => { openAuth('signup'); setMobileMenuOpen(false); }}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
