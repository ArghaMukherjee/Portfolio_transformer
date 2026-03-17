import html2pdf from 'html2pdf.js';

export const generatePDF = () => {
    const resumeHTML = `
    <div style="font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color: #1a1a1a; max-width: 800px; margin: 0 auto; padding: 0; line-height: 1.5; font-size: 13px;">

        <!-- HEADER -->
        <div style="text-align: center; padding-bottom: 16px; border-bottom: 2px solid #2563eb; margin-bottom: 20px;">
            <h1 style="font-size: 28px; font-weight: 700; color: #111; margin: 0 0 4px 0; letter-spacing: -0.5px;">ARGHA MUKHERJEE</h1>
            <p style="font-size: 15px; color: #2563eb; font-weight: 600; margin: 0 0 8px 0;">Principal Architect — AI/ML & Data Science</p>
            <p style="font-size: 12px; color: #555; margin: 0;">
                AI/ML Leader &bull; 8+ Years Experience &bull; 15+ Certifications &bull; 50+ Projects
            </p>
        </div>

        <!-- PROFESSIONAL SUMMARY -->
        <div style="margin-bottom: 18px;">
            <h2 style="font-size: 14px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0; padding-bottom: 4px; border-bottom: 1px solid #e5e7eb;">Professional Summary</h2>
            <p style="margin: 0; color: #333; font-size: 13px; line-height: 1.6;">
                Results-driven AI/ML leader with 8+ years of progressive experience specializing in building intelligent systems that solve real-world problems. Expertise spans healthcare, finance, and technology sectors — from research to production. Currently leading AI architecture and strategy at IKS Health, building and deploying AI Agents for clinical workflows with end-to-end MLOps pipelines.
            </p>
        </div>

        <!-- TECHNICAL SKILLS -->
        <div style="margin-bottom: 18px;">
            <h2 style="font-size: 14px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0; padding-bottom: 4px; border-bottom: 1px solid #e5e7eb;">Technical Skills</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
                <tr>
                    <td style="padding: 4px 8px 4px 0; font-weight: 600; color: #333; white-space: nowrap; vertical-align: top; width: 140px;">Core AI/ML</td>
                    <td style="padding: 4px 0; color: #555;">Machine Learning, Deep Learning, Neural Networks, Reinforcement Learning, Transfer Learning</td>
                </tr>
                <tr style="background: #f9fafb;">
                    <td style="padding: 4px 8px 4px 0; font-weight: 600; color: #333; white-space: nowrap; vertical-align: top;">NLP & Language</td>
                    <td style="padding: 4px 0; color: #555;">Natural Language Processing, Large Language Models, Transformers, BERT/GPT, Text Analytics</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px 4px 0; font-weight: 600; color: #333; white-space: nowrap; vertical-align: top;">Generative AI</td>
                    <td style="padding: 4px 0; color: #555;">Generative AI, Agentic AI, RAG Systems, Prompt Engineering, LLM Fine-tuning, AI Agents</td>
                </tr>
                <tr style="background: #f9fafb;">
                    <td style="padding: 4px 8px 4px 0; font-weight: 600; color: #333; white-space: nowrap; vertical-align: top;">Computer Vision</td>
                    <td style="padding: 4px 0; color: #555;">Object Detection, Image Segmentation, OCR, Video Analytics</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px 4px 0; font-weight: 600; color: #333; white-space: nowrap; vertical-align: top;">Frameworks & Tools</td>
                    <td style="padding: 4px 0; color: #555;">Python, TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, LangChain, OpenAI API</td>
                </tr>
                <tr style="background: #f9fafb;">
                    <td style="padding: 4px 8px 4px 0; font-weight: 600; color: #333; white-space: nowrap; vertical-align: top;">MLOps & Cloud</td>
                    <td style="padding: 4px 0; color: #555;">AWS SageMaker, Azure ML, Docker, Kubernetes, CI/CD for ML, Model Deployment</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px 4px 0; font-weight: 600; color: #333; white-space: nowrap; vertical-align: top;">Responsible AI</td>
                    <td style="padding: 4px 0; color: #555;">Ethical AI, Explainable AI, AI Governance, Bias Detection, Privacy-Preserving ML</td>
                </tr>
            </table>
        </div>

        <!-- PROFESSIONAL EXPERIENCE -->
        <div style="margin-bottom: 18px;">
            <h2 style="font-size: 14px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0; padding-bottom: 4px; border-bottom: 1px solid #e5e7eb;">Professional Experience</h2>

            <!-- IKS Health -->
            <div style="margin-bottom: 14px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                    <h3 style="font-size: 14px; font-weight: 700; color: #111; margin: 0;">Principal Architect (DS/AI)</h3>
                    <span style="font-size: 12px; color: #555; white-space: nowrap;">Mar 2025 – Present</span>
                </div>
                <p style="font-size: 13px; color: #2563eb; font-weight: 600; margin: 0 0 4px 0;">IKS Health <span style="color: #888; font-weight: 400;">· Remote</span></p>
                <ul style="margin: 4px 0 0 16px; padding: 0; color: #333;">
                    <li style="margin-bottom: 3px;">Leading AI/ML architecture and strategy for healthcare solutions</li>
                    <li style="margin-bottom: 3px;">Building and deploying multiple AI Agents for clinical workflows</li>
                    <li style="margin-bottom: 3px;">Implementing MLOps pipelines for scalable model deployment and monitoring</li>
                </ul>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0 0;"><strong>Key Skills:</strong> Generative AI, AI Agents, MLOps, LLM Fine-tuning, RAG Systems, Multi-Agent Systems, Azure ML, Kubernetes</p>
            </div>

            <!-- Razor Group -->
            <div style="margin-bottom: 14px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                    <h3 style="font-size: 14px; font-weight: 700; color: #111; margin: 0;">Data Platform Manager — AI/ML (Tech & Analytics)</h3>
                    <span style="font-size: 12px; color: #555; white-space: nowrap;">Oct 2024 – Present</span>
                </div>
                <p style="font-size: 13px; color: #2563eb; font-weight: 600; margin: 0 0 4px 0;">Razor Group <span style="color: #888; font-weight: 400;">· Remote</span></p>
                <ul style="margin: 4px 0 0 16px; padding: 0; color: #333;">
                    <li style="margin-bottom: 3px;">End-to-end product design, development and delivery using innovative AI and Gen AI methodologies</li>
                    <li style="margin-bottom: 3px;">Collaboration across cross-functional teams and strategy building including continuous enhancements</li>
                </ul>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0 0;"><strong>Key Skills:</strong> Generative AI, Product Design, AI/ML Strategy</p>
            </div>

            <!-- CitiusTech -->
            <div style="margin-bottom: 14px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                    <h3 style="font-size: 14px; font-weight: 700; color: #111; margin: 0;">Technical Lead -2 (AI and BA)</h3>
                    <span style="font-size: 12px; color: #555; white-space: nowrap;">Apr 2024 – Oct 2024</span>
                </div>
                <p style="font-size: 13px; color: #2563eb; font-weight: 600; margin: 0 0 4px 0;">CitiusTech Healthcare <span style="color: #888; font-weight: 400;">· Pune, India</span></p>
                <ul style="margin: 4px 0 0 16px; padding: 0; color: #333;">
                    <li style="margin-bottom: 3px;">Design and development of AI and Gen AI solutions to meet business needs</li>
                    <li style="margin-bottom: 3px;">Integration and deployment of scalable solutions for healthcare domain</li>
                </ul>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0 0;"><strong>Key Skills:</strong> Gen AI Solutions, AI Architecture, Scalable Deployment, Business Analytics</p>
            </div>

            <div style="margin-bottom: 14px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                    <h3 style="font-size: 14px; font-weight: 700; color: #111; margin: 0;">Technical Lead (AI Engineering)</h3>
                    <span style="font-size: 12px; color: #555; white-space: nowrap;">Apr 2023 – Mar 2024</span>
                </div>
                <p style="font-size: 13px; color: #2563eb; font-weight: 600; margin: 0 0 4px 0;">CitiusTech Healthcare <span style="color: #888; font-weight: 400;">· Pune, India</span></p>
                <ul style="margin: 4px 0 0 16px; padding: 0; color: #333;">
                    <li style="margin-bottom: 3px;">HLD and implementation of end-to-end NLP projects</li>
                    <li style="margin-bottom: 3px;">Projects in NLP, Brain Tumor 3D Image Segmentation</li>
                    <li style="margin-bottom: 3px;">MLOps project for infrastructure scaling, deployment, optimization and model monitoring</li>
                </ul>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0 0;"><strong>Key Skills:</strong> NLP, Brain Tumor 3D Segmentation, MLOps, Model Monitoring, Deep Learning</p>
            </div>

            <div style="margin-bottom: 14px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                    <h3 style="font-size: 14px; font-weight: 700; color: #111; margin: 0;">Sr. Software Developer (AI Engineering)</h3>
                    <span style="font-size: 12px; color: #555; white-space: nowrap;">May 2021 – Mar 2023</span>
                </div>
                <p style="font-size: 13px; color: #2563eb; font-weight: 600; margin: 0 0 4px 0;">CitiusTech Healthcare <span style="color: #888; font-weight: 400;">· Pune, India</span></p>
                <ul style="margin: 4px 0 0 16px; padding: 0; color: #333;">
                    <li style="margin-bottom: 3px;">Pre-processing clinical data and designing ML models for cloud-based deployment using AWS</li>
                    <li style="margin-bottom: 3px;">Similarity, threshold and entropy calculation for clinical notes</li>
                    <li style="margin-bottom: 3px;">Error analysis of NLP trained models</li>
                </ul>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0 0;"><strong>Key Skills:</strong> Machine Learning, AWS, Clinical NLP, Cloud Deployment, Error Analysis</p>
            </div>

            <!-- UST Global -->
            <div style="margin-bottom: 14px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                    <h3 style="font-size: 14px; font-weight: 700; color: #111; margin: 0;">Software Developer</h3>
                    <span style="font-size: 12px; color: #555; white-space: nowrap;">Dec 2019 – Apr 2021</span>
                </div>
                <p style="font-size: 13px; color: #2563eb; font-weight: 600; margin: 0 0 4px 0;">UST Global <span style="color: #888; font-weight: 400;">· India</span></p>
                <ul style="margin: 4px 0 0 16px; padding: 0; color: #333;">
                    <li style="margin-bottom: 3px;">ETL, BDL, Big Data (Hive, Kafka Streamsets)</li>
                    <li style="margin-bottom: 3px;">PII Data Masking project using custom Python algorithms and JKS for credential management</li>
                    <li style="margin-bottom: 3px;">Data Warehouse, Data Lake, Control-M Scheduling for OnDemand Jobs</li>
                </ul>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0 0;"><strong>Key Skills:</strong> Big Data, Hive, Kafka, ETL, Data Warehouse, Python, Control-M</p>
            </div>

            <!-- Amazon -->
            <div style="margin-bottom: 14px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                    <h3 style="font-size: 14px; font-weight: 700; color: #111; margin: 0;">Support (DevOps) Engineer — Amazon Pay</h3>
                    <span style="font-size: 12px; color: #555; white-space: nowrap;">Aug 2017 – Dec 2019</span>
                </div>
                <p style="font-size: 13px; color: #2563eb; font-weight: 600; margin: 0 0 4px 0;">Amazon Development Centre <span style="color: #888; font-weight: 400;">· Bangalore, India</span></p>
                <ul style="margin: 4px 0 0 16px; padding: 0; color: #333;">
                    <li style="margin-bottom: 3px;">Metric monitoring using AWS Technologies (CloudWatch, DynamoDB)</li>
                    <li style="margin-bottom: 3px;">Version Control (GIT), DevOps practices</li>
                    <li style="margin-bottom: 3px;">Infrastructure scaling/optimization and resource management for Amazon Pay platform</li>
                </ul>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0 0;"><strong>Key Skills:</strong> AWS, CloudWatch, DynamoDB, DevOps, GIT, Infrastructure Scaling</p>
            </div>
        </div>

        <!-- EDUCATION -->
        <div style="margin-bottom: 18px;">
            <h2 style="font-size: 14px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0; padding-bottom: 4px; border-bottom: 1px solid #e5e7eb;">Education</h2>

            <div style="margin-bottom: 10px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="font-size: 13px; font-weight: 700; color: #111; margin: 0;">Doctor of Business Administration (DBA)</h3>
                    <span style="font-size: 12px; color: #555;">Aug 2022 – Aug 2025</span>
                </div>
                <p style="font-size: 12px; color: #555; margin: 2px 0 0 0;">Golden Gate University · <em>Research: Data Morphing using AI and CyberSecurity</em></p>
            </div>

            <div style="margin-bottom: 10px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="font-size: 13px; font-weight: 700; color: #111; margin: 0;">Master of Science (MS) — Machine Learning & AI</h3>
                    <span style="font-size: 12px; color: #555;">Jul 2021 – Jul 2022</span>
                </div>
                <p style="font-size: 12px; color: #555; margin: 2px 0 0 0;">Liverpool John Moores University · <em>Research on Healthcare AI</em></p>
            </div>

            <div style="margin-bottom: 10px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="font-size: 13px; font-weight: 700; color: #111; margin: 0;">Post Graduate Diploma — Machine Learning & AI</h3>
                    <span style="font-size: 12px; color: #555;">2020 – 2021</span>
                </div>
                <p style="font-size: 12px; color: #555; margin: 2px 0 0 0;">IIIT Bangalore · <em>ML, Deep Learning, NLP, Reinforcement Learning</em></p>
            </div>

            <div style="margin-bottom: 10px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="font-size: 13px; font-weight: 700; color: #111; margin: 0;">Postgraduate — Product Management</h3>
                    <span style="font-size: 12px; color: #555;">Aug 2022 – Feb 2023</span>
                </div>
                <p style="font-size: 12px; color: #555; margin: 2px 0 0 0;">Duke University</p>
            </div>

            <div style="margin-bottom: 10px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="font-size: 13px; font-weight: 700; color: #111; margin: 0;">Bachelor of Engineering (B.E.) — Computer Science</h3>
                    <span style="font-size: 12px; color: #555;">2013 – 2017</span>
                </div>
                <p style="font-size: 12px; color: #555; margin: 2px 0 0 0;">Visvesvaraya Technological University (VTU)</p>
            </div>
        </div>

        <!-- CERTIFICATIONS -->
        <div style="margin-bottom: 12px;">
            <h2 style="font-size: 14px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0; padding-bottom: 4px; border-bottom: 1px solid #e5e7eb;">Certifications</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
                <tr>
                    <td style="padding: 4px 12px 4px 0; font-weight: 600; color: #333;">Natural Language Processing</td>
                    <td style="padding: 4px 0; color: #555;">Coursera</td>
                </tr>
                <tr style="background: #f9fafb;">
                    <td style="padding: 4px 12px 4px 0; font-weight: 600; color: #333;">Azure AI-900</td>
                    <td style="padding: 4px 0; color: #555;">Microsoft</td>
                </tr>
                <tr>
                    <td style="padding: 4px 12px 4px 0; font-weight: 600; color: #333;">Machine Learning Engineering</td>
                    <td style="padding: 4px 0; color: #555;">AWS</td>
                </tr>
            </table>
        </div>

    </div>
    `;

    // Create a container element from the HTML string
    const container = document.createElement('div');
    container.innerHTML = resumeHTML;

    const opt = {
        margin:       [12, 12, 12, 12],
        filename:     'Argha_Mukherjee_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(container).save();
};
