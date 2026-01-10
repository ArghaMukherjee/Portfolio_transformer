import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CredentialModal from './components/CredentialModal';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';
import Newsletter from './components/Newsletter';
import TransformerBackground from './components/TransformerBackground';

// Import credential images
import ljmuCert from './assets/credentials/ljmu-certificate.png';
import iiitbCert from './assets/credentials/iiitb-certificate.png';
import dukeCert from './assets/credentials/duke-certificate.png';

// Import styles
import './styles/cinematic.css';
import './styles/contact.css';
import './styles/chatbot.css';
import './styles/newsletter.css';
import './styles/skills.css';
import './styles/experience.css';
import './styles/transformer.css';
import './styles/responsive.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top on initial load (Hero section)
    window.scrollTo(0, 0);

    // Clear any hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    // Trigger page load animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const credentialImages = {
    'ljmu-certificate.png': ljmuCert,
    'iiitb-certificate.png': iiitbCert,
    'duke-certificate.png': dukeCert,
  };

  const handleViewCredential = (credentialFile, title) => {
    setModalImage(credentialImages[credentialFile]);
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImage('');
    setModalTitle('');
  };

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <CustomCursor />
      <TransformerBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education onViewCredential={handleViewCredential} />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <CredentialModal
        isOpen={modalOpen}
        imageSrc={modalImage}
        title={modalTitle}
        onClose={handleCloseModal}
      />
      <Chatbot />
    </div>
  );
}

export default App;
