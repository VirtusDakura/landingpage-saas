import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="fade-in-up delay-1 inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
                    <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></span>
                    <span className="text-sm text-surface-200">Introducing Velox 2.0 — Now with AI-powered analytics</span>
                </div>

                {/* Main Heading */}
                <h1 className="fade-in-up delay-2 text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Build faster with
                    <br />
                    <span className="gradient-text">intelligent automation</span>
                </h1>

                {/* Subheading */}
                <p className="fade-in-up delay-3 text-lg md:text-xl text-surface-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Streamline your workflow with our cutting-edge platform. Automate repetitive tasks,
                    gain actionable insights, and scale your business with confidence.
                </p>

                {/* CTA Buttons */}
                <div className="fade-in-up delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                        Start Free Trial
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                {/* Stats */}
                <div className="fade-in-up delay-5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { number: '10K+', label: 'Active Users' },
                        { number: '99.9%', label: 'Uptime' },
                        { number: '150+', label: 'Countries' },
                        { number: '24/7', label: 'Support' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="stat-number">{stat.number}</div>
                            <div className="text-surface-200 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Dashboard Preview */}
                <div className="fade-in-up delay-5 mt-20 relative">
                    <div className="glass-card p-2 md:p-4 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-surface-900 to-surface-950 rounded-xl overflow-hidden border border-white/5">
                            {/* Browser Chrome */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="bg-white/5 rounded-lg px-4 py-1 text-xs text-surface-200">
                                        app.velox.io/dashboard
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Content */}
                            <div className="p-6 md:p-8">
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {[
                                        { label: 'Revenue', value: '$124,582', change: '+23%', color: 'from-accent-emerald to-accent-cyan' },
                                        { label: 'Users', value: '8,429', change: '+18%', color: 'from-primary-500 to-accent-violet' },
                                        { label: 'Conversion', value: '12.5%', change: '+5%', color: 'from-accent-pink to-accent-amber' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="glass rounded-xl p-4">
                                            <div className="text-surface-200 text-xs mb-2">{item.label}</div>
                                            <div className="text-xl md:text-2xl font-bold text-white">{item.value}</div>
                                            <div className={`text-xs mt-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-medium`}>
                                                {item.change}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Chart Mockup */}
                                <div className="glass rounded-xl p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-sm font-medium text-white">Analytics Overview</div>
                                        <div className="glass px-3 py-1 rounded-lg text-xs text-surface-200">Last 7 days</div>
                                    </div>
                                    <div className="h-40 flex items-end justify-between gap-2">
                                        {[40, 65, 45, 80, 55, 90, 70].map((height, idx) => (
                                            <div
                                                key={idx}
                                                className="flex-1 bg-gradient-to-t from-primary-600 to-accent-violet rounded-t-lg transition-all duration-500 hover:opacity-80"
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-surface-200">
                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                                            <span key={idx}>{day}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gradient Glow */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-primary-600/30 via-accent-violet/30 to-accent-pink/30 blur-3xl"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
                <svg className="w-6 h-10 text-surface-200" fill="none" stroke="currentColor" viewBox="0 0 24 40">
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
