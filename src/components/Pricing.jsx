import React, { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        description: 'Perfect for individuals and small projects',
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
            '1,000 automation runs/month',
            '5 workflow templates',
            'Basic analytics',
            'Email support',
            'API access',
        ],
        cta: 'Start Free',
        popular: false,
    },
    {
        name: 'Professional',
        description: 'For growing teams that need more power',
        monthlyPrice: 49,
        yearlyPrice: 39,
        features: [
            '50,000 automation runs/month',
            'Unlimited workflow templates',
            'Advanced analytics & AI insights',
            'Priority support',
            'Team collaboration (up to 10)',
            'Custom integrations',
            'SSO authentication',
        ],
        cta: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'For large organizations with custom needs',
        monthlyPrice: 199,
        yearlyPrice: 159,
        features: [
            'Unlimited automation runs',
            'Unlimited everything',
            'Dedicated success manager',
            '24/7 phone & chat support',
            'Unlimited team members',
            'Custom contracts',
            'On-premise deployment',
            'SLA guarantee',
        ],
        cta: 'Contact Sales',
        popular: false,
    },
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section id="pricing" className="section">
            {/* Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Section Header */}
                <div className="section-header">
                    <span className="pill" style={{ marginBottom: '24px' }}>
                        <svg style={{ width: '16px', height: '16px', color: '#ec4899' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Flexible Pricing
                    </span>
                    <h2 className="section-title">
                        Simple, transparent
                        <br />
                        <span className="gradient-text">pricing for everyone</span>
                    </h2>
                    <p className="section-subtitle" style={{ marginBottom: '40px' }}>
                        Choose the plan that fits your needs. All plans include a 14-day free trial.
                    </p>

                    {/* Billing Toggle */}
                    <div className="billing-toggle">
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: isYearly ? '#94a3b8' : 'white' }}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`toggle-switch ${isYearly ? 'active' : ''}`}
                        ></button>
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: isYearly ? 'white' : '#94a3b8' }}>
                            Yearly
                        </span>
                        <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            color: '#10b981',
                            background: 'rgba(16,185,129,0.2)',
                            padding: '4px 12px',
                            borderRadius: '100px'
                        }}>
                            Save 20%
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="pricing-grid" style={{ marginTop: '48px' }}>
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="popular-badge">Most Popular</div>
                            )}

                            {/* Plan Name */}
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{plan.name}</h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div style={{ marginBottom: '32px' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                    <span style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', fontWeight: 700, color: 'white' }}>
                                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    <span style={{ color: '#94a3b8' }}>/month</span>
                                </div>
                                {isYearly && plan.monthlyPrice > 0 && (
                                    <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '8px' }}>
                                        Billed yearly (${plan.yearlyPrice * 12}/year)
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="feature-list" style={{ marginBottom: '32px' }}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                                style={{ width: '100%', padding: '16px', borderRadius: '12px' }}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '48px' }}>
                    All prices in USD. Taxes may apply.{' '}
                    <a href="#" style={{ color: '#7f96fa' }}>View full comparison</a>
                </p>
            </div>
        </section>
    );
};

export default Pricing;
