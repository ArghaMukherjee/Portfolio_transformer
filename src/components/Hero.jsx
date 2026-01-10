import { useEffect, useRef, useState } from 'react';
import profilePhoto from '../assets/profile-photo.png';

function Hero() {
    const subtitleRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const titles = ['AI/ML Leader', 'Data Science Expert', 'Deep Learning Specialist', 'NLP Engineer'];

    useEffect(() => {
        // Immediate reveal - no empty scroll
        setIsLoaded(true);
        setShowTitle(true);
        setShowName(true);
        setShowContent(true);
    }, []);

    useEffect(() => {
        if (!showContent) return;

        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentTitle = titles[titleIndex];

            if (subtitleRef.current) {
                if (isDeleting) {
                    subtitleRef.current.textContent = currentTitle.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    subtitleRef.current.textContent = currentTitle.substring(0, charIndex + 1);
                    charIndex++;
                }

                if (!isDeleting && charIndex === currentTitle.length) {
                    setTimeout(() => { isDeleting = true; }, 2000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    titleIndex = (titleIndex + 1) % titles.length;
                }
            }

            setTimeout(type, isDeleting ? 50 : 100);
        };

        const timer = setTimeout(type, 500);
        return () => clearTimeout(timer);
    }, [showContent]);

    return (
        <section className={`hero ${isLoaded ? 'netflix-loaded' : ''}`} id="hero">
            <div className="hero-bg">
                <div className="hero-orb orb-1"></div>
                <div className="hero-orb orb-2"></div>
                <div className="hero-orb orb-3"></div>
                <div className="netflix-vignette"></div>
                <div className="grid-overlay"></div>
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <div className={`hero-badge netflix-reveal ${showContent ? 'revealed' : ''}`}>
                        <span className="badge-dot"></span>
                        <span>Available for opportunities</span>
                    </div>
                    <h1 className="hero-title">
                        <span className={`title-line netflix-fade-up ${showTitle ? 'revealed' : ''}`}>
                            Hi, I'm
                        </span>
                        <span className={`title-name netflix-scale-reveal ${showName ? 'revealed' : ''}`}>
                            Argha Mukherjee
                        </span>
                    </h1>
                    <p className={`hero-subtitle netflix-glow ${showContent ? 'revealed' : ''}`}>
                        <span ref={subtitleRef}>AI/ML Leader</span>
                        <span className="cursor">|</span>
                    </p>
                    <p className={`hero-description netflix-reveal ${showContent ? 'revealed' : ''}`}>
                        Transforming businesses through cutting-edge Machine Learning, Deep Learning, and Natural Language
                        Processing solutions.
                        Currently leading AI initiatives at <strong>IKS Health</strong>.
                    </p>
                    <div className={`hero-cta netflix-reveal ${showContent ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <a href="#contact" className="btn btn-primary netflix-btn">
                            <span>Get in Touch</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#projects" className="btn btn-secondary netflix-btn">View Projects</a>
                    </div>
                    <div className={`hero-stats netflix-reveal ${showContent ? 'revealed' : ''}`} style={{ transitionDelay: '0.4s' }}>
                        <div className="stat-item netflix-stat">
                            <span className="stat-number">8+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item netflix-stat">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Certifications</span>
                        </div>
                        <div className="stat-item netflix-stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>
                </div>
                <div className={`hero-visual netflix-zoom ${showContent ? 'revealed' : ''}`}>
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src={profilePhoto} alt="Argha Mukherjee" className="profile-photo" />
                            <div className="profile-ring"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`scroll-indicator netflix-reveal ${showContent ? 'revealed' : ''}`} style={{ transitionDelay: '0.6s' }}>
                <span>Scroll to explore</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}

export default Hero;
