import { useScrollReveal } from '../hooks/useAnimations';
import AnimatedSection from './AnimatedSection';
import ljmuLogo from '../assets/credentials/ljmu-logo.png';

function Education({ onViewCredential }) {
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

    const educations = [
        {
            icon: '🎓',
            title: 'Doctor of Business Administration (DBA)',
            institution: 'Golden Gate University',
            description: 'Business Administration, Management and Operations. Research Area: Data Morphing using AI and CyberSecurity.',
            year: 'Aug 2022 - Aug 2025',
            tags: ['AI Research', 'CyberSecurity', 'Data Morphing'],
            featured: true,
            pursuing: true,
        },
        {
            icon: '🎓',
            title: 'Master of Science (MS) - Machine Learning & AI',
            institution: 'Liverpool John Moores University',
            description: 'Research on Healthcare based problem statement. Skills: Deep Learning, NLP, Computer Vision, and more.',
            year: 'Jul 2021 - Jul 2022',
            tags: ['Machine Learning', 'Deep Learning', 'Healthcare AI'],
            credential: 'ljmu-certificate.png',
            credentialTitle: 'Liverpool John Moores University - MS in AI & ML',
            logo: ljmuLogo,
        },
        {
            icon: '🎓',
            title: 'Post Graduate Diploma - Machine Learning & AI',
            institution: 'IIIT Bangalore',
            description: 'Comprehensive program in Computer Science covering Machine Learning, Deep Learning, NLP, and Reinforcement Learning.',
            year: '2020 - 2021',
            tags: ['Machine Learning', 'Deep Learning', 'NLP', 'RL'],
            credential: 'iiitb-certificate.png',
            credentialTitle: 'IIIT Bangalore - PG Diploma in ML & AI',
        },
        {
            icon: '🎓',
            title: 'Postgraduate - Product Management',
            institution: 'Duke University',
            description: 'Advanced program in Product Management, combining strategic thinking with technical expertise for product leadership.',
            year: 'Aug 2022 - Feb 2023',
            tags: ['Product Management', 'Strategy', 'Leadership'],
            credential: 'duke-certificate.png',
            credentialTitle: 'Duke University - Product Management',
        },
        {
            icon: '🎓',
            title: 'Bachelor of Engineering (B.E.) - Computer Science',
            institution: 'Visvesvaraya Technological University (VTU)',
            description: 'Foundation in Computer Science & Engineering with focus on programming, algorithms, and system design.',
            year: '2013 - 2017',
            tags: ['Computer Science', 'Engineering', 'Programming'],
        },
    ];

    return (
        <section className="education section" id="education">
            <div className="container">
                <AnimatedSection className="section-header">
                    <span className="section-tag">Academic Journey</span>
                    <h2 className="section-title shimmer-text">Education</h2>
                </AnimatedSection>
                <div
                    ref={gridRef}
                    className={`education-grid stagger-children ${gridVisible ? 'visible' : ''}`}
                >
                    {educations.map((edu, index) => (
                        <div
                            key={index}
                            className={`edu-card glass-card glow-effect ${edu.featured ? 'featured' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {edu.logo ? (
                                <div className="edu-icon-row">
                                    <span className="edu-icon float">{edu.icon}</span>
                                    <img src={edu.logo} alt={`${edu.institution} Logo`} className="edu-logo" />
                                </div>
                            ) : (
                                <div className="edu-icon float">{edu.icon}</div>
                            )}
                            {edu.pursuing && <div className="edu-status pursuing pulse-glow">Pursuing</div>}
                            <div className="edu-content">
                                <h3>{edu.title}</h3>
                                <p className="edu-institution">{edu.institution}</p>
                                <p className="edu-desc">{edu.description}</p>
                                <span className="edu-year">{edu.year}</span>
                                {edu.credential && (
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onViewCredential(edu.credential, edu.credentialTitle);
                                        }}
                                        className="edu-credential magnetic-btn"
                                    >
                                        View Credential →
                                    </a>
                                )}
                                <div className="edu-tags">
                                    {edu.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
