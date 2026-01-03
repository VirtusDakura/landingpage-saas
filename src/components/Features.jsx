import React from 'react';

const features = [
    {
        icon: (
            <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Lightning Fast',
        description: 'Experience blazing-fast performance with our optimized infrastructure. Process millions of requests in milliseconds.',
        color: 'from-primary-500 to-primary-600',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Enterprise Security',
        description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA. Your data is always protected.',
        color: 'from-accent-cyan to-primary-500',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'AI-Powered Analytics',
        description: 'Leverage machine learning to uncover insights automatically. Get predictive analytics and smart recommendations.',
        color: 'from-accent-violet to-accent-pink',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-accent-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Team Collaboration',
        description: 'Real-time collaboration tools for seamless teamwork. Share projects, assign tasks, and communicate effortlessly.',
        color: 'from-accent-emerald to-accent-cyan',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: 'Custom Workflows',
        description: 'Build automated workflows with our drag-and-drop builder. Connect 200+ integrations and automate anything.',
        color: 'from-accent-pink to-accent-amber',
    },
    {
        icon: (
            <svg className="w-7 h-7 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'Advanced Reporting',
        description: 'Generate comprehensive reports with customizable dashboards. Export data in multiple formats with one click.',
        color: 'from-accent-amber to-primary-500',
    },
];

const Features = () => {
    return (
        <section id="features" className="relative py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                        <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span className="text-sm text-surface-200">Powerful Features</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Everything you need to
                        <br />
                        <span className="gradient-text-cyan">succeed at scale</span>
                    </h2>
                    <p className="text-lg text-surface-200 max-w-2xl mx-auto">
                        Our platform provides all the tools you need to streamline operations,
                        boost productivity, and drive growth for your business.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className={`icon-glow mb-6 bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-surface-200 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Learn More Link */}
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 mt-6 text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                Learn more
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
