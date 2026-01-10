import { useScrollReveal } from '../hooks/useAnimations';
import AnimatedSection from './AnimatedSection';

function Contact() {
    const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

    const contactOptions = [
        {
            icon: '📅',
            title: 'Book a Session',
            description: 'Schedule a consultation on Topmate',
            url: 'https://topmate.io/arghamukherjee',
        },
        {
            icon: '🌐',
            title: 'Personal Website',
            description: 'www.arghamukherjee.com',
            url: 'https://www.arghamukherjee.com',
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            description: 'Connect with me professionally',
            url: 'https://linkedin.com/in/arghamukherjee04',
        },
    ];

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <AnimatedSection className="section-header contact-header">
                    <span className="section-tag contact-tag">GET IN TOUCH</span>
                    <h2 className="section-title contact-title">Let's Work Together</h2>
                    <p className="contact-subtitle">
                        Interested in AI/ML solutions or consulting? I'd love to hear about your project and explore
                        how we can collaborate.
                    </p>
                </AnimatedSection>

                <div
                    ref={cardsRef}
                    className={`contact-cards stagger-children ${cardsVisible ? 'visible' : ''}`}
                >
                    {contactOptions.map((option, index) => (
                        <a
                            key={index}
                            href={option.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card glass-card glow-effect"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="contact-card-icon">
                                <span>{option.icon}</span>
                            </div>
                            <div className="contact-card-content">
                                <h3 className="contact-card-title">{option.title}</h3>
                                <p className="contact-card-desc">{option.description}</p>
                            </div>
                            <div className="contact-card-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
