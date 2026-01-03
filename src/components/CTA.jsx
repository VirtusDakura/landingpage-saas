import React, { useState } from 'react';
import { AuthModal, DemoModal } from './Modal';

const CTA = () => {
    const [authModal, setAuthModal] = useState(false);
    const [demoModal, setDemoModal] = useState(false);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="cta-card">
                        {/* Background Orbs */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
                            filter: 'blur(60px)',
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
                            filter: 'blur(60px)',
                            transform: 'translate(50%, 50%)',
                            pointerEvents: 'none'
                        }}></div>

                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                fontWeight: 700,
                                marginBottom: '24px',
                                lineHeight: 1.2
                            }}>
                                Ready to transform
                                <br />
                                <span className="gradient-text">your workflow?</span>
                            </h2>
                            <p style={{
                                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                color: '#94a3b8',
                                maxWidth: '640px',
                                margin: '0 auto 40px',
                                lineHeight: 1.7
                            }}>
                                Join 10,000+ teams who trust Velox to automate their operations and accelerate growth.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                                <button
                                    className="btn-primary"
                                    style={{ fontSize: '1.125rem', padding: '20px 40px' }}
                                    onClick={() => setAuthModal(true)}
                                >
                                    Start Free Trial
                                </button>
                                <button
                                    className="btn-secondary"
                                    style={{ fontSize: '1.125rem', padding: '20px 40px' }}
                                    onClick={() => setDemoModal(true)}
                                >
                                    Schedule Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AuthModal isOpen={authModal} onClose={() => setAuthModal(false)} mode="signup" />
            <DemoModal isOpen={demoModal} onClose={() => setDemoModal(false)} />
        </>
    );
};

export default CTA;
