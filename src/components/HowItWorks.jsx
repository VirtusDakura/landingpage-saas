import { useModal } from '../context/ModalContext';
import useInView from '../hooks/useInView';

const steps = [
    {
        number: '01', title: 'Create Your Event',
        description: 'Set up your event in minutes — add details, branding, schedule, and speakers. Choose from templates or start fresh.',
        icon: (<svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    },
    {
        number: '02', title: 'Sell Tickets',
        description: 'Create multiple ticket types (VIP, Early Bird, Group). Accept payments via Stripe, Paystack, or Flutterwave — no per-ticket fees.',
        icon: (<svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>),
    },
    {
        number: '03', title: 'Check-in Attendees',
        description: 'Scan QR codes with any phone camera. Works offline. Real-time arrival dashboard keeps you in control at every gate.',
        icon: (<svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    },
    {
        number: '04', title: 'Analyze & Grow',
        description: 'Post-event analytics show what worked — registration funnels, revenue breakdown, engagement metrics. Clone your event to run it again.',
        icon: (<svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
    },
];

const HowItWorks = () => {
    const { openAuth } = useModal();
    const [ref, isInView] = useInView();

    return (
        <section id="how-it-works" className="section" ref={ref}>
            <div className="container">
                <div className={`section-header reveal ${isInView ? 'visible' : ''}`}>
                    <span className="pill" style={{ marginBottom: '24px' }}>
                        <svg style={{ width: '16px', height: '16px', color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        Simple Process
                    </span>
                    <h2 className="section-title">
                        From idea to sold-out<br />
                        <span className="gradient-text">in four easy steps</span>
                    </h2>
                    <p className="section-subtitle">
                        Whether it's a 20-person workshop or a 10,000-seat conference,
                        Velox makes the journey seamless.
                    </p>
                </div>

                <div className="steps-grid" style={{ marginTop: '32px' }}>
                    {steps.map((step) => (
                        <div key={step.title} className={`step-card reveal ${isInView ? 'visible' : ''}`}>
                            <div className="step-number">
                                <span className="gradient-text">{step.number}</span>
                            </div>
                            <div className="step-icon">{step.icon}</div>
                            <h3 className="card-title">{step.title}</h3>
                            <p className="card-description">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className={`reveal ${isInView ? 'visible' : ''}`} style={{ textAlign: 'center', marginTop: '64px' }}>
                    <button className="btn-primary" style={{ fontSize: '1.125rem', padding: '16px 32px' }}
                        onClick={() => openAuth('signup')}>
                        Create Your First Event — Free
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
