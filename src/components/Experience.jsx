import { useScrollReveal } from '../hooks/useAnimations';
import AnimatedSection from './AnimatedSection';

function Experience() {
    const [timelineRef, timelineVisible] = useScrollReveal({ threshold: 0.1 });

    const experiences = [
        {
            company: 'IKS Health',
            logo: '🏥',
            tenure: '10+ Months',
            roles: [
                {
                    title: 'Principal Architect (DS/AI)',
                    type: 'Full-time',
                    duration: 'Mar 2025 - Present',
                    location: 'Remote',
                    description: 'Leading AI/ML architecture and strategy for healthcare solutions. Building and deploying multiple AI Agents for clinical workflows. Implementing MLOps pipelines for scalable model deployment and monitoring.',
                    technicalSkills: ['Generative AI', 'AI Agents', 'MLOps', 'LLM Fine-tuning', 'RAG Systems', 'Multi-Agent Systems', 'Azure ML', 'Kubernetes'],
                    interpersonalSkills: ['Technical Leadership', 'Architecture Design', 'Strategic Planning', 'Cross-team Collaboration'],
                },
            ],
        },
        {
            company: 'Razor Group',
            logo: '🚀',
            tenure: '6+ Months',
            roles: [
                {
                    title: 'Data Platform Manager - AI/ML (Tech and Analytics)',
                    type: 'Full-time',
                    duration: 'Oct 2024 - Present',
                    location: 'Remote',
                    description: 'End-to-end Product design, development and delivery using innovative AI and Gen AI methodologies. Collaboration across cross-functional teams and strategy building including continuous enhancements.',
                    technicalSkills: ['Generative AI', 'Gen AI', 'Product Design', 'AI/ML Strategy'],
                    interpersonalSkills: ['Cross-functional Collaboration', 'Strategy Building', 'Team Leadership'],
                },
            ],
        },
        {
            company: 'CitiusTech Healthcare',
            logo: '🏥',
            tenure: '3+ Years',
            roles: [
                {
                    title: 'Technical Lead -2 (AI and BA)',
                    type: 'Full-time',
                    duration: 'Apr 2024 - Oct 2024',
                    location: 'Pune, India',
                    description: 'Design and Development of AI and Gen AI Solutions to meet business needs. Integration and deployment of scalable solutions for healthcare domain.',
                    technicalSkills: ['Gen AI Solutions', 'AI Architecture', 'Scalable Deployment', 'Business Analytics'],
                    interpersonalSkills: ['Technical Leadership', 'Solution Design', 'Business Alignment'],
                },
                {
                    title: 'Technical Lead (AI Engineering)',
                    type: 'Full-time',
                    duration: 'Apr 2023 - Mar 2024',
                    location: 'Pune, India',
                    description: 'HLD and Implementation of end-to-end project implementation using NLP. Projects into NLP, Brain Tumor 3D Image Segmentation. MLOps project for infrastructure scaling, deployment and optimization using model monitoring.',
                    technicalSkills: ['NLP', 'Brain Tumor 3D Segmentation', 'MLOps', 'Model Monitoring', 'Deep Learning'],
                    interpersonalSkills: ['Project Leadership', 'End-to-End Delivery', 'Technical Mentoring'],
                },
                {
                    title: 'Sr. Software Developer (AI Engineering)',
                    type: 'Full-time',
                    duration: 'May 2021 - Mar 2023',
                    location: 'Pune, India',
                    description: 'Pre-processing clinical data and designing Machine Learning models for cloud-based deployment using AWS and APIs. Similarity, threshold and entropy calculation for clinical notes. Error Analysis of NLP trained models.',
                    technicalSkills: ['Machine Learning', 'AWS', 'Clinical NLP', 'Cloud Deployment', 'Error Analysis'],
                    interpersonalSkills: ['Problem Solving', 'Data Analysis', 'Documentation'],
                },
            ],
        },
        {
            company: 'UST Global',
            logo: '🌐',
            tenure: '1 Year 4 Months',
            roles: [
                {
                    title: 'Software Developer',
                    type: 'Full-time',
                    duration: 'Dec 2019 - Apr 2021',
                    location: 'India',
                    description: 'ETL, BDL, Big Data (Hive, Kafka Streamsets). PII Data Masking project using custom Python algorithms and JKS for credential management, Data Warehouse, Data Lake. Control-M Scheduling for OnDemand Jobs.',
                    technicalSkills: ['Big Data', 'Hive', 'Kafka', 'ETL', 'Data Warehouse', 'Python', 'Control-M'],
                    interpersonalSkills: ['Data Engineering', 'Process Automation', 'Team Collaboration'],
                },
            ],
        },
        {
            company: 'Amazon Development Centre',
            logo: '📦',
            tenure: '2 Years 4 Months',
            roles: [
                {
                    title: 'Support (DevOps) Engineer - Amazon Pay',
                    type: 'Full-time',
                    duration: 'Aug 2017 - Dec 2019',
                    location: 'Bangalore, India',
                    description: 'Metric monitoring using AWS Technologies (CloudWatch, DynamoDB). Version Control (GIT), DevOps practices. Infrastructure Scaling/Optimization and resource management for Amazon Pay platform.',
                    technicalSkills: ['AWS', 'CloudWatch', 'DynamoDB', 'DevOps', 'GIT', 'Infrastructure Scaling'],
                    interpersonalSkills: ['Operations Excellence', 'Resource Management', 'Incident Response'],
                },
            ],
        },
    ];

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <AnimatedSection className="section-header">
                    <span className="section-tag">Career Journey</span>
                    <h2 className="section-title shimmer-text">Professional Experience</h2>
                    <p className="section-subtitle">
                        8+ years of progressive experience in AI/ML, Data Science, and Technology Leadership
                    </p>
                </AnimatedSection>

                <div
                    ref={timelineRef}
                    className={`experience-timeline ${timelineVisible ? 'visible' : ''}`}
                >
                    {experiences.map((company, companyIndex) => (
                        <div key={company.company} className="company-block">
                            <div className="company-header">
                                <div className="company-logo">{company.logo}</div>
                                <h3 className="company-name">{company.company}</h3>
                                <span className="company-tenure">
                                    {company.roles.length} role{company.roles.length > 1 ? 's' : ''} · {company.tenure}
                                </span>
                            </div>

                            <div className="roles-timeline">
                                {company.roles.map((role, roleIndex) => (
                                    <div
                                        key={role.title}
                                        className="role-card glass-card"
                                        style={{ animationDelay: `${(companyIndex * 0.2) + (roleIndex * 0.1)}s` }}
                                    >
                                        <div className="role-marker">
                                            <div className="marker-dot"></div>
                                            {roleIndex < company.roles.length - 1 && <div className="marker-line"></div>}
                                        </div>

                                        <div className="role-content">
                                            <div className="role-header">
                                                <div className="role-title-section">
                                                    <h4 className="role-title">{role.title}</h4>
                                                    <span className="role-type">{role.type}</span>
                                                </div>
                                                <div className="role-meta">
                                                    <span className="role-duration">{role.duration}</span>
                                                    <span className="role-location">{role.location}</span>
                                                </div>
                                            </div>

                                            <p className="role-description">{role.description}</p>

                                            <div className="role-skills">
                                                <div className="skills-row">
                                                    <span className="skills-label">🔧 Tech:</span>
                                                    <div className="skills-tags">
                                                        {role.technicalSkills.map((skill) => (
                                                            <span key={skill} className="skill-tag technical">{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="skills-row">
                                                    <span className="skills-label">🤝 Soft:</span>
                                                    <div className="skills-tags">
                                                        {role.interpersonalSkills.map((skill) => (
                                                            <span key={skill} className="skill-tag interpersonal">{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
