import { useScrollReveal } from '../hooks/useAnimations';
import AnimatedSection from './AnimatedSection';

function About() {
    const [skillsRef, skillsVisible] = useScrollReveal({ threshold: 0.2 });

    // Expanded skills with categories
    const skillCategories = [
        {
            title: 'Core AI/ML',
            skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'Transfer Learning']
        },
        {
            title: 'NLP & Language',
            skills: ['Natural Language Processing', 'Large Language Models', 'Transformers', 'BERT/GPT', 'Text Analytics', 'Sentiment Analysis']
        },
        {
            title: 'Generative AI',
            skills: ['Generative AI', 'Agentic AI', 'RAG Systems', 'Prompt Engineering', 'LLM Fine-tuning', 'AI Agents']
        },
        {
            title: 'Computer Vision',
            skills: ['Computer Vision', 'Object Detection', 'Image Segmentation', 'OCR', 'Video Analytics']
        },
        {
            title: 'Data Science',
            skills: ['Data Science', 'Predictive Analytics', 'Statistical Modeling', 'Feature Engineering', 'A/B Testing', 'Data Visualization']
        },
        {
            title: 'Responsible AI',
            skills: ['Ethical AI', 'Explainable AI', 'AI Governance', 'Bias Detection', 'Model Interpretability']
        },
        {
            title: 'Frameworks & Tools',
            skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face', 'LangChain', 'OpenAI API']
        },
        {
            title: 'MLOps & Cloud',
            skills: ['MLOps', 'AWS SageMaker', 'Azure ML', 'Docker', 'Kubernetes', 'CI/CD for ML', 'Model Deployment']
        },
        {
            title: 'Ethical AI',
            skills: ['AI Safety', 'Fairness & Equity', 'Privacy-Preserving ML', 'Human-AI Collaboration', 'AI Regulations', 'Trustworthy AI']
        }
    ];

    return (
        <section className="about section" id="about">
            <div className="container">
                <AnimatedSection className="section-header">
                    <span className="section-tag">About Me</span>
                    <h2 className="section-title shimmer-text">Passionate About AI Innovation</h2>
                    <p className="section-subtitle">
                        With over a decade of experience in the AI/ML space, I specialize in building intelligent
                        systems that solve real-world problems. My journey spans from research to production,
                        delivering impactful solutions across healthcare, finance, and technology sectors.
                    </p>
                </AnimatedSection>

                <div className="about-highlights-row">
                    <AnimatedSection animation="reveal" className="highlight-card glass-card glow-effect">
                        <div className="highlight-icon">🎯</div>
                        <h4>Problem Solver</h4>
                        <p>Turning complex challenges into elegant AI solutions</p>
                    </AnimatedSection>
                    <AnimatedSection animation="reveal" className="highlight-card glass-card glow-effect">
                        <div className="highlight-icon">🚀</div>
                        <h4>Innovation Driver</h4>
                        <p>Leading teams to build cutting-edge ML products</p>
                    </AnimatedSection>
                    <AnimatedSection animation="reveal" className="highlight-card glass-card glow-effect">
                        <div className="highlight-icon">📚</div>
                        <h4>Lifelong Learner</h4>
                        <p>Continuously exploring new frontiers in AI</p>
                    </AnimatedSection>
                </div>

                <AnimatedSection className="skills-section">
                    <h3 className="skills-title">Technical Expertise</h3>
                    <div
                        ref={skillsRef}
                        className={`skills-bubbles-container ${skillsVisible ? 'visible' : ''}`}
                    >
                        {skillCategories.map((category, catIndex) => (
                            <div key={category.title} className="skill-category-bubble">
                                <h4 className="category-title">{category.title}</h4>
                                <div className="skills-bubbles">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skill}
                                            className="skill-bubble glass-bubble"
                                            style={{
                                                animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default About;
