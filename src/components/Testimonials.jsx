import useInView from '../hooks/useInView';

const testimonials = [
    {
        quote: "Velox transformed how our team works. We've seen a 40% increase in productivity since implementing their automation tools.",
        author: "Sarah Chen", role: "CTO, TechFlow Inc.", avatar: "SC", rating: 5,
    },
    {
        quote: "The AI-powered analytics are game-changing. We can now predict customer behavior and make data-driven decisions faster than ever.",
        author: "Marcus Johnson", role: "VP of Operations, Growthly", avatar: "MJ", rating: 5,
    },
    {
        quote: "Best investment we've made this year. The ROI was visible within the first month. Customer support is also top-notch!",
        author: "Emily Rodriguez", role: "Founder, StartupLab", avatar: "ER", rating: 5,
    },
];

const logos = ['Stripe', 'Notion', 'Slack', 'Figma', 'Vercel', 'Linear'];

const Testimonials = () => {
    const [ref, isInView] = useInView();

    return (
        <section id="testimonials" className="section" ref={ref}>
            <div className="testimonials-bg"></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className={`section-header reveal ${isInView ? 'visible' : ''}`}>
                    <span className="pill" style={{ marginBottom: '24px' }}>
                        <svg style={{ width: '16px', height: '16px', color: '#f59e0b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Loved by Teams
                    </span>
                    <h2 className="section-title">
                        Trusted by thousands of<br />
                        <span className="gradient-text">industry leaders</span>
                    </h2>
                    <p className="section-subtitle">
                        See what our customers have to say about their experience with Velox.
                    </p>
                </div>

                <div className="testimonials-grid" style={{ marginBottom: '80px' }}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.author} className={`testimonial-card reveal ${isInView ? 'visible' : ''}`}>
                            <div className="testimonial-stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{testimonial.avatar}</div>
                                <div>
                                    <div className="testimonial-author-name">{testimonial.author}</div>
                                    <div className="testimonial-author-role">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`reveal ${isInView ? 'visible' : ''}`} style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Powering teams at companies like
                    </p>
                    <div className="logos-row">
                        {logos.map((logo) => <span key={logo}>{logo}</span>)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
