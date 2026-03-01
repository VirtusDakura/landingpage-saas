import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openAuth, openDemo } = useModal();

    const stats = [
        { number: '10K+', label: 'Active Users' },
        { number: '99.9%', label: 'Uptime' },
        { number: '150+', label: 'Countries' },
        { number: '24/7', label: 'Support' },
    ];

    const dashboardStats = [
        { label: 'Revenue', value: '$124,582', change: '+23%' },
        { label: 'Users', value: '8,429', change: '+18%' },
        { label: 'Conversion', value: '12.5%', change: '+5%' },
    ];

    const chartData = [40, 65, 45, 80, 55, 90, 70];
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
                        Introducing Velox 2.0 — Now with AI-powered analytics
                    </span>
                </div>

                <h1 className="fade-in-up delay-2 hero-heading">
                    Build faster with<br />
                    <span className="gradient-text">intelligent automation</span>
                </h1>

                <p className="fade-in-up delay-3 hero-subheading">
                    Streamline your workflow with our cutting-edge platform. Automate repetitive tasks,
                    gain actionable insights, and scale your business with confidence.
                </p>

                <div className="fade-in-up delay-4 hero-cta-group">
                    <button className="btn-primary" onClick={() => openAuth('signup')}>
                        Start Free Trial
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button className="btn-secondary" onClick={openDemo}>
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Request Demo
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
                                <div className="browser-url"><span>app.velox.io/dashboard</span></div>
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
                                        <div className="chart-title">Analytics Overview</div>
                                        <div className="glass chart-period">Last 7 days</div>
                                    </div>
                                    <div className="chart-bars">
                                        {chartData.map((height, idx) => (
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
