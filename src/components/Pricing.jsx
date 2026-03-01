import { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import { useToast } from './Toast';
import useInView from '../hooks/useInView';

const plans = [
    {
        name: 'Starter', description: 'Perfect for individuals and small projects',
        monthlyPrice: 0, yearlyPrice: 0,
        features: ['1,000 automation runs/month', '5 workflow templates', 'Basic analytics', 'Email support', 'API access'],
        cta: 'Start Free', popular: false,
    },
    {
        name: 'Professional', description: 'For growing teams that need more power',
        monthlyPrice: 49, yearlyPrice: 39,
        features: ['50,000 automation runs/month', 'Unlimited workflow templates', 'Advanced analytics & AI insights', 'Priority support', 'Team collaboration (up to 10)', 'Custom integrations', 'SSO authentication'],
        cta: 'Start Free Trial', popular: true,
    },
    {
        name: 'Enterprise', description: 'For large organizations with custom needs',
        monthlyPrice: 199, yearlyPrice: 159,
        features: ['Unlimited automation runs', 'Unlimited everything', 'Dedicated success manager', '24/7 phone & chat support', 'Unlimited team members', 'Custom contracts', 'On-premise deployment', 'SLA guarantee'],
        cta: 'Contact Sales', popular: false,
    },
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(() => {
        const saved = localStorage.getItem('velox-billing-yearly');
        return saved !== null ? JSON.parse(saved) : true;
    });
    const { openAuth } = useModal();
    const { addToast } = useToast();
    const [ref, isInView] = useInView();

    useEffect(() => {
        localStorage.setItem('velox-billing-yearly', JSON.stringify(isYearly));
    }, [isYearly]);

    const handlePlanSelect = (plan) => {
        if (plan.name === 'Enterprise') {
            addToast('Our sales team will contact you within 24 hours!', 'info');
        } else {
            openAuth('signup');
        }
    };

    return (
        <section id="pricing" className="section" ref={ref}>
            <div className="bg-gradient-center"></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className={`section-header reveal ${isInView ? 'visible' : ''}`}>
                    <span className="pill" style={{ marginBottom: '24px' }}>
                        <svg style={{ width: '16px', height: '16px', color: '#ec4899' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Flexible Pricing
                    </span>
                    <h2 className="section-title">
                        Simple, transparent<br />
                        <span className="gradient-text">pricing for everyone</span>
                    </h2>
                    <p className="section-subtitle" style={{ marginBottom: '40px' }}>
                        Choose the plan that fits your needs. All plans include a 14-day free trial.
                    </p>

                    <div className="billing-toggle">
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: isYearly ? '#94a3b8' : 'white' }}>Monthly</span>
                        <button onClick={() => setIsYearly(!isYearly)} className={`toggle-switch ${isYearly ? 'active' : ''}`}
                            aria-label="Toggle billing period"></button>
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: isYearly ? 'white' : '#94a3b8' }}>Yearly</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#10b981', background: 'rgba(16,185,129,0.2)', padding: '4px 12px', borderRadius: '100px' }}>Save 20%</span>
                    </div>
                </div>

                <div className="pricing-grid" style={{ marginTop: '48px' }}>
                    {plans.map((plan) => (
                        <div key={plan.name} className={`pricing-card reveal ${isInView ? 'visible' : ''} ${plan.popular ? 'popular' : ''}`}>
                            {plan.popular && <div className="popular-badge">Most Popular</div>}
                            <div style={{ marginBottom: '24px' }}>
                                <h3 className="pricing-plan-name">{plan.name}</h3>
                                <p className="pricing-plan-desc">{plan.description}</p>
                            </div>
                            <div style={{ marginBottom: '32px' }}>
                                <div className="pricing-price">
                                    <span className="pricing-amount">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                                    <span className="pricing-period">/month</span>
                                </div>
                                {isYearly && plan.monthlyPrice > 0 && (
                                    <p className="pricing-yearly-note">Billed yearly (${plan.yearlyPrice * 12}/year)</p>
                                )}
                            </div>
                            <ul className="feature-list" style={{ marginBottom: '32px' }}>
                                {plan.features.map((feature) => (
                                    <li key={feature}>
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                                style={{ width: '100%', padding: '16px', borderRadius: '12px' }}
                                onClick={() => handlePlanSelect(plan)}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <p className={`reveal ${isInView ? 'visible' : ''}`} style={{ textAlign: 'center', color: '#94a3b8', marginTop: '48px' }}>
                    All prices in USD. Taxes may apply.{' '}
                    <a href="#features" style={{ color: '#7f96fa' }}>View full comparison</a>
                </p>
            </div>
        </section>
    );
};

export default Pricing;
