import useInView from '../hooks/useInView';

const testimonials = [
    {
        quote: "We switched from Eventbrite and saved over $2,000 in fees on our first conference alone. The QR check-in is incredibly fast — no more long queues at the door.",
        author: "Amara Okafor", role: "Events Lead, TechCabal Lagos", avatar: "AO", rating: 5,
    },
    {
        quote: "Finally an event platform that supports Paystack natively! Our payment conversion rate jumped 40% because attendees could pay with methods they actually use.",
        author: "David Mensah", role: "Founder, AccraJS Meetup", avatar: "DM", rating: 5,
    },
    {
        quote: "We ran a 3-day hybrid conference with 2,500 attendees. The real-time analytics dashboard was a game-changer — we could see engagement drop and adjust on the fly.",
        author: "Priya Sharma", role: "VP Events, GlobalTech Corp", avatar: "PS", rating: 5,
    },
];

const logos = ['Google DevFest', 'TechCabal', 'Andela', 'Flutterwave', 'Paystack', 'Ingressive'];

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
                        Loved by Organizers
                    </span>
                    <h2 className="section-title">
                        Trusted by event organizers<br />
                        <span className="gradient-text">across Africa and beyond</span>
                    </h2>
                    <p className="section-subtitle">
                        From intimate meetups to massive conferences — hear from organizers who made the switch.
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
                        Powering events at organizations like
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
