import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Create Your Account',
        description: 'Sign up in seconds with your email or SSO. No credit card required to get started.',
        icon: (
            <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Connect Your Tools',
        description: 'Integrate with your favorite apps in one click. We support 200+ popular integrations.',
        icon: (
            <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Build Workflows',
        description: 'Use our intuitive drag-and-drop builder to create powerful automated workflows.',
        icon: (
            <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Scale & Grow',
        description: 'Watch your productivity soar as automation handles the heavy lifting for you.',
        icon: (
            <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="pill" style={{ marginBottom: '24px' }}>
                        <svg style={{ width: '16px', height: '16px', color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        Simple Process
                    </span>
                    <h2 className="section-title">
                        Get started in
                        <br />
                        <span className="gradient-text">four easy steps</span>
                    </h2>
                    <p className="section-subtitle">
                        From sign-up to success in minutes. Our streamlined onboarding process
                        gets you up and running faster than ever.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="steps-grid" style={{ marginTop: '32px' }}>
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            {/* Step Number */}
                            <div className="step-number">
                                <span className="gradient-text">{step.number}</span>
                            </div>

                            {/* Icon */}
                            <div className="step-icon">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: 'white' }}>
                                {step.title}
                            </h3>
                            <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: 'center', marginTop: '64px' }}>
                    <button className="btn-primary" style={{ fontSize: '1.125rem', padding: '16px 32px' }}>
                        Start Your Journey
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
