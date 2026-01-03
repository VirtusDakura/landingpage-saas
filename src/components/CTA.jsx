import React from 'react';

const CTA = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-violet/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to transform<br /><span className="gradient-text">your workflow?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-surface-200 max-w-2xl mx-auto mb-10">
                            Join 10,000+ teams who trust Velox to automate their operations and accelerate growth.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="btn-primary text-lg px-10 py-5">Start Free Trial</button>
                            <button className="btn-secondary text-lg px-10 py-5">Schedule Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
