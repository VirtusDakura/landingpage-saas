import React from 'react';

const testimonials = [
    {
        quote: "Velox transformed how our team works. We've seen a 40% increase in productivity since implementing their automation tools.",
        author: "Sarah Chen",
        role: "CTO, TechFlow Inc.",
        avatar: "SC",
        rating: 5,
    },
    {
        quote: "The AI-powered analytics are game-changing. We can now predict customer behavior and make data-driven decisions faster than ever.",
        author: "Marcus Johnson",
        role: "VP of Operations, Growthly",
        avatar: "MJ",
        rating: 5,
    },
    {
        quote: "Best investment we've made this year. The ROI was visible within the first month. Customer support is also top-notch!",
        author: "Emily Rodriguez",
        role: "Founder, StartupLab",
        avatar: "ER",
        rating: 5,
    },
];

const logos = ['Stripe', 'Notion', 'Slack', 'Figma', 'Vercel', 'Linear'];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent, rgba(30,27,75,0.3), transparent)',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Section Header */}
                <div className="section-header">
                    <span className="pill" style={{ marginBottom: '24px' }}>
                        <svg style={{ width: '16px', height: '16px', color: '#f59e0b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Loved by Teams
                    </span>
                    <h2 className="section-title">
                        Trusted by thousands of
                        <br />
                        <span className="gradient-text">industry leaders</span>
                    </h2>
                    <p className="section-subtitle">
                        See what our customers have to say about their experience with Velox.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="testimonials-grid" style={{ marginBottom: '80px' }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} style={{ width: '20px', height: '20px', color: '#f59e0b' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p style={{ color: '#e2e8f0', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '32px', flex: 1 }}>
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 600
                                }}>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: 'white' }}>{testimonial.author}</div>
                                    <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Company Logos */}
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Powering teams at companies like
                    </p>
                    <div className="logos-row">
                        {logos.map((logo, index) => (
                            <span key={index}>{logo}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
