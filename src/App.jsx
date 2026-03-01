import { ToastProvider } from './components/Toast';
import { ModalProvider, useModal } from './context/ModalContext';
import { AuthModal, DemoModal } from './components/Modal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const AppContent = () => {
  const { modalState, closeModal } = useModal();

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider"></div>
        <Features />
        <div className="section-divider"></div>
        <HowItWorks />
        <div className="section-divider"></div>
        <Testimonials />
        <div className="section-divider"></div>
        <Pricing />
        <CTA />
      </main>
      <Footer />

      <AuthModal isOpen={modalState.type === 'auth'} onClose={closeModal} mode={modalState.mode} />
      <DemoModal isOpen={modalState.type === 'demo'} onClose={closeModal} />
    </div>
  );
};

const App = () => {
  return (
    <ToastProvider>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </ToastProvider>
  );
};

export default App;