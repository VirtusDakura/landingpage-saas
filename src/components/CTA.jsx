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
                            Ready to host your<br />
                            <span className="gradient-text">next unforgettable event?</span>
                        </h2>
                        <p className="cta-subheading">
                            Join 5,000+ organizers who trust Velox to manage their events — from intimate meetups to massive conferences. Start free, no credit card required.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn-primary" style={{ fontSize: '1.125rem', padding: '20px 40px' }}
                                onClick={() => openAuth('signup')}>
                                Create Your Event — Free
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
