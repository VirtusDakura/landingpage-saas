import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Create Your Account',
        description: 'Sign up in seconds with your email or SSO. No credit card required to get started.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Connect Your Tools',
        description: 'Integrate with your favorite apps in one click. We support 200+ popular integrations.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Build Workflows',
        description: 'Use our intuitive drag-and-drop builder to create powerful automated workflows.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Scale & Grow',
        description: 'Watch your productivity soar as automation handles the heavy lifting for you.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="relative py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                        <svg className="w-4 h-4 text-accent-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        <span className="text-sm text-surface-200">Simple Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Get started in
                        <br />
                        <span className="gradient-text">four easy steps</span>
                    </h2>
                    <p className="text-lg text-surface-200 max-w-2xl mx-auto">
                        From sign-up to success in minutes. Our streamlined onboarding process
                        gets you up and running faster than ever.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Step Card */}
                                <div className="glass-card p-8 text-center h-full">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 glass px-4 py-1 rounded-full">
                                        <span className="text-sm font-bold gradient-text">{step.number}</span>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-violet/20 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold mb-3 text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-surface-200">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow (hidden on last item and mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                                        <div className="w-8 h-8 rounded-full bg-surface-900 border-2 border-primary-500/30 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <button className="btn-primary text-lg px-8 py-4">
                        Start Your Journey
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
