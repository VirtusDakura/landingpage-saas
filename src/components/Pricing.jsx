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
        <section id="pricing" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                        <svg className="w-4 h-4 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-surface-200">Flexible Pricing</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Simple, transparent
                        <br />
                        <span className="gradient-text">pricing for everyone</span>
                    </h2>
                    <p className="text-lg text-surface-200 max-w-2xl mx-auto mb-10">
                        Choose the plan that fits your needs. All plans include a 14-day free trial.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 glass px-6 py-3 rounded-full">
                        <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-surface-200'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-14 h-7 bg-primary-600/30 rounded-full transition-colors"
                        >
                            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${isYearly ? 'left-8' : 'left-1'}`}></div>
                        </button>
                        <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-surface-200'}`}>
                            Yearly
                        </span>
                        <span className="text-xs font-medium text-accent-emerald bg-accent-emerald/20 px-2 py-1 rounded-full">
                            Save 20%
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card ${plan.popular ? 'popular pt-12' : ''} relative`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-primary-500 to-accent-violet px-4 py-1 rounded-full text-sm font-medium text-white">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-surface-200 text-sm">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-white">
                                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-surface-200">/month</span>
                                </div>
                                {isYearly && plan.monthlyPrice > 0 && (
                                    <p className="text-sm text-surface-200 mt-2">
                                        Billed yearly (${plan.yearlyPrice * 12}/year)
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-accent-emerald flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-surface-100">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                ? 'btn-primary'
                                : 'btn-secondary'
                                }`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <p className="text-center text-surface-200 mt-12">
                    All prices in USD. Taxes may apply.{' '}
                    <a href="#" className="text-primary-400 hover:underline">View full comparison</a>
                </p>
            </div>
        </section>
    );
};

export default Pricing;
