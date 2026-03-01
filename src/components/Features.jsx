import useInView from '../hooks/useInView';

const features = [
    {
        id: 'lightning-fast',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
        title: 'Lightning Fast',
        description: 'Experience blazing-fast performance with our optimized infrastructure. Process millions of requests in milliseconds.',
        color: '#7f96fa',
    },
    {
        id: 'enterprise-security',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
        title: 'Enterprise Security',
        description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA. Your data is always protected.',
        color: '#06b6d4',
    },
    {
        id: 'ai-analytics',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
        title: 'AI-Powered Analytics',
        description: 'Leverage machine learning to uncover insights automatically. Get predictive analytics and smart recommendations.',
        color: '#8b5cf6',
    },
    {
        id: 'team-collaboration',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>),
        title: 'Team Collaboration',
        description: 'Real-time collaboration tools for seamless teamwork. Share projects, assign tasks, and communicate effortlessly.',
        color: '#10b981',
    },
    {
        id: 'custom-workflows',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>),
        title: 'Custom Workflows',
        description: 'Build automated workflows with our drag-and-drop builder. Connect 200+ integrations and automate anything.',
        color: '#ec4899',
    },
    {
        id: 'advanced-reporting',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
        title: 'Advanced Reporting',
        description: 'Generate comprehensive reports with customizable dashboards. Export data in multiple formats with one click.',
        color: '#f59e0b',
    },
];

const Features = () => {
    const [ref, isInView] = useInView();

    return (
        <section id="features" className="section" ref={ref}>
            <div className="bg-gradient-tl"></div>
            <div className="bg-gradient-br"></div>

            <div className="container">
                <div className={`section-header reveal ${isInView ? 'visible' : ''}`}>
                    <span className="pill" style={{ marginBottom: '24px' }}>
                        <svg style={{ width: '16px', height: '16px', color: '#7f96fa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Powerful Features
                    </span>
                    <h2 className="section-title">
                        Everything you need to<br />
                        <span className="gradient-text-cyan">succeed at scale</span>
                    </h2>
                    <p className="section-subtitle">
                        Our platform provides all the tools you need to streamline operations,
                        boost productivity, and drive growth for your business.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className={`glass-card reveal ${isInView ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="icon-glow" style={{ marginBottom: '24px', color: feature.color }}>
                                {feature.icon}
                            </div>
                            <h3 className="card-title">{feature.title}</h3>
                            <p className="card-description" style={{ flex: 1 }}>{feature.description}</p>
                            <a href="#" className="feature-link">
                                Learn more
                                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
