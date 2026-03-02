import useInView from '../hooks/useInView';

const features = [
    {
        id: 'smart-registration',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>),
        title: 'Smart Registration',
        description: 'Custom forms with conditional logic, multi-ticket types, group registration, and promo codes. Collect exactly the data you need.',
        color: '#7f96fa',
    },
    {
        id: 'qr-checkin',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>),
        title: 'QR Code Check-in',
        description: 'Scan tickets with any phone camera — no app needed. Works offline, syncs when back online. Real-time arrival dashboard.',
        color: '#06b6d4',
    },
    {
        id: 'multi-payments',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>),
        title: 'Multi-Gateway Payments',
        description: 'Accept payments via Stripe, Paystack, and Flutterwave. Support for mobile money, cards, and bank transfers across Africa.',
        color: '#10b981',
    },
    {
        id: 'real-time-analytics',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
        title: 'Real-Time Analytics',
        description: 'Registration funnels, revenue dashboards, demographics, check-in rates, and engagement metrics — all updating live.',
        color: '#8b5cf6',
    },
    {
        id: 'attendee-engagement',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>),
        title: 'Attendee Engagement',
        description: 'Live polls, Q&A boards, session ratings, real-time chat, and networking tools — keep your audience connected and involved.',
        color: '#ec4899',
    },
    {
        id: 'branded-pages',
        icon: (<svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>),
        title: 'Custom Event Pages',
        description: 'Fully branded event pages with your colors, logo, and domain. SEO-optimized, beautiful on every device. No cookie-cutter templates.',
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
                        Everything You Need
                    </span>
                    <h2 className="section-title">
                        One platform for<br />
                        <span className="gradient-text-cyan">every event need</span>
                    </h2>
                    <p className="section-subtitle">
                        Stop juggling 5 different tools. Velox brings ticketing, registration, check-in,
                        payments, engagement, and analytics into one seamless experience.
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
                            <a href="#pricing" className="feature-link">
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
