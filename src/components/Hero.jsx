import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openAuth, openDemo } = useModal();

    const stats = [
        { number: '5,000+', label: 'Events Hosted' },
        { number: '200K+', label: 'Attendees' },
        { number: '50+', label: 'Countries' },
        { number: '99.9%', label: 'Uptime' },
    ];

    const dashboardStats = [
        { label: 'Registrations', value: '1,847', change: '+24% this week' },
        { label: 'Revenue', value: '$28,450', change: '+18% this week' },
        { label: 'Check-in Rate', value: '94.2%', change: '+3% vs last event' },
    ];

    const ticketData = [30, 55, 45, 80, 65, 95, 78];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <section id="hero" className="section hero-section">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            <div className="grid-pattern"></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <div className="fade-in-up delay-1" style={{ marginBottom: '32px' }}>
                    <span className="pill">
                        <span className="status-dot"></span>
                        Trusted by 5,000+ event organizers worldwide
                    </span>
                </div>

                <h1 className="fade-in-up delay-2 hero-heading">
                    Create unforgettable events<br />
                    <span className="gradient-text">with effortless management</span>
                </h1>

                <p className="fade-in-up delay-3 hero-subheading">
                    From registration to check-in, ticketing to analytics — manage every aspect of your
                    event in one powerful platform. No per-ticket fees. Ever.
                </p>

                <div className="fade-in-up delay-4 hero-cta-group">
                    <button className="btn-primary" onClick={() => openAuth('signup')}>
                        Create Your Event
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button className="btn-secondary" onClick={openDemo}>
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                <div className="fade-in-up delay-5 stats-grid" style={{ marginBottom: '80px' }}>
                    {stats.map((stat) => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                            <div className="stat-number">{stat.number}</div>
                            <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '4px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="fade-in-up delay-5" style={{ position: 'relative' }}>
                    <div className="dashboard-preview">
                        <div className="dashboard-inner">
                            <div className="browser-chrome">
                                <div className="browser-dots"><span></span><span></span><span></span></div>
                                <div className="browser-url"><span>app.velox.io/events/tech-summit-2026</span></div>
                            </div>
                            <div className="dashboard-content">
                                <div className="dashboard-stats">
                                    {dashboardStats.map((item) => (
                                        <div key={item.label} className="dashboard-stat-card">
                                            <div className="dashboard-stat-label">{item.label}</div>
                                            <div className="dashboard-stat-value">{item.value}</div>
                                            <div className="gradient-text dashboard-stat-change">{item.change}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="dashboard-chart">
                                    <div className="chart-header">
                                        <div className="chart-title">Ticket Sales</div>
                                        <div className="glass chart-period">This week</div>
                                    </div>
                                    <div className="chart-bars">
                                        {ticketData.map((height, idx) => (
                                            <div key={days[idx]} className="chart-bar" style={{ height: `${height}%` }}></div>
                                        ))}
                                    </div>
                                    <div className="chart-labels">
                                        {days.map((day) => <span key={day}>{day}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-glow"></div>
                </div>
            </div>

            <div className="scroll-indicator" style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)' }}>
                <svg style={{ width: '24px', height: '40px', color: '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 40">
                    <rect x="2" y="2" width="20" height="36" rx="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" fill="currentColor">
                        <animate attributeName="cy" values="12;20;12" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
