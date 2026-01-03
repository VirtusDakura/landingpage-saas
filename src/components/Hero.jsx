import React from 'react';

const Hero = () => {
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
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
            {/* Animated Background Orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>

            {/* Grid Pattern Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.02,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                {/* Badge */}
                <div className="fade-in-up delay-1" style={{ marginBottom: '32px' }}>
                    <span className="pill">
                        <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
                        Introducing Velox 2.0 — Now with AI-powered analytics
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="fade-in-up delay-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.1 }}>
                    Build faster with
                    <br />
                    <span className="gradient-text">intelligent automation</span>
                </h1>

                {/* Subheading */}
                <p className="fade-in-up delay-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#94a3b8', maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                    Streamline your workflow with our cutting-edge platform. Automate repetitive tasks,
                    gain actionable insights, and scale your business with confidence.
                </p>

                {/* CTA Buttons */}
                <div className="fade-in-up delay-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}>
                    <button className="btn-primary">
                        Start Free Trial
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button className="btn-secondary">
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                {/* Stats */}
                <div className="fade-in-up delay-5 stats-grid" style={{ marginBottom: '80px' }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <div className="stat-number">{stat.number}</div>
                            <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '4px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Dashboard Preview */}
                <div className="fade-in-up delay-5" style={{ position: 'relative' }}>
                    <div className="dashboard-preview">
                        <div className="dashboard-inner">
                            {/* Browser Chrome */}
                            <div className="browser-chrome">
                                <div className="browser-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="browser-url">
                                    <span>app.velox.io/dashboard</span>
                                </div>
                            </div>
                            {/* Dashboard Content */}
                            <div className="dashboard-content">
                                <div className="dashboard-stats">
                                    {dashboardStats.map((item, idx) => (
                                        <div key={idx} className="dashboard-stat-card">
                                            <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '8px' }}>{item.label}</div>
                                            <div style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, color: 'white' }}>{item.value}</div>
                                            <div className="gradient-text" style={{ fontSize: '0.75rem', marginTop: '4px', fontWeight: 500 }}>
                                                {item.change}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Chart */}
                                <div className="dashboard-chart">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                        <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'white' }}>Analytics Overview</div>
                                        <div className="glass" style={{ padding: '4px 12px', borderRadius: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>Last 7 days</div>
                                    </div>
                                    <div className="chart-bars">
                                        {chartData.map((height, idx) => (
                                            <div key={idx} className="chart-bar" style={{ height: `${height}%` }}></div>
                                        ))}
                                    </div>
                                    <div className="chart-labels">
                                        {days.map((day, idx) => (
                                            <span key={idx}>{day}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gradient Glow */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-80px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '75%',
                        height: '160px',
                        background: 'linear-gradient(to right, rgba(99,102,241,0.3), rgba(139,92,246,0.3), rgba(236,72,153,0.3))',
                        filter: 'blur(60px)',
                        pointerEvents: 'none'
                    }}></div>
                </div>
            </div>

            {/* Scroll Indicator */}
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
