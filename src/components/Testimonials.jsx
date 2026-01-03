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

const logos = [
    'Stripe', 'Notion', 'Slack', 'Figma', 'Vercel', 'Linear'
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="relative py-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/30 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                        <svg className="w-4 h-4 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="text-sm text-surface-200">Loved by Teams</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Trusted by thousands of
                        <br />
                        <span className="gradient-text">industry leaders</span>
                    </h2>
                    <p className="text-lg text-surface-200 max-w-2xl mx-auto">
                        See what our customers have to say about their experience with Velox.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-accent-amber" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-surface-100 text-lg leading-relaxed mb-8">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center text-white font-semibold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-surface-200">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Company Logos */}
                <div className="text-center">
                    <p className="text-sm text-surface-200 mb-8 uppercase tracking-wider">
                        Powering teams at companies like
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="text-2xl font-bold text-surface-200/50 hover:text-surface-200 transition-colors cursor-default"
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
