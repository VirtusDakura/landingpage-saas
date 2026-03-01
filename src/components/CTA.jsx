import { useModal } from '../context/ModalContext';
import useInView from '../hooks/useInView';

const CTA = () => {
    const { openAuth, openDemo } = useModal();
    const [ref, isInView] = useInView();

    return (
        <section className="section" ref={ref}>
            <div className="container">
                <div className={`cta-card reveal ${isInView ? 'visible' : ''}`}>
                    <div className="cta-orb-1"></div>
                    <div className="cta-orb-2"></div>

                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <h2 className="cta-heading">
                            Ready to transform<br />
                            <span className="gradient-text">your workflow?</span>
                        </h2>
                        <p className="cta-subheading">
                            Join 10,000+ teams who trust Velox to automate their operations and accelerate growth.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn-primary" style={{ fontSize: '1.125rem', padding: '20px 40px' }}
                                onClick={() => openAuth('signup')}>
                                Start Free Trial
                            </button>
                            <button className="btn-secondary" style={{ fontSize: '1.125rem', padding: '20px 40px' }}
                                onClick={openDemo}>
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
