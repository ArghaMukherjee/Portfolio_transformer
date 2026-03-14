function Certifications() {
    const certifications = [

        {
            icon: '💬',
            title: 'Natural Language Processing',
            issuer: 'Coursera',
            description: 'Advanced NLP techniques including transformers, attention mechanisms, and language models.',
        },
        {
            icon: '☁️',
            title: 'Azure AI-900',
            issuer: 'Microsoft',
            description: 'Microsoft certified in AI fundamentals, covering Azure AI services and machine learning concepts.',
        },

        {
            icon: '🎓',
            title: 'Machine Learning Engineering',
            issuer: 'AWS',
            description: 'AWS certified in designing, building, and deploying ML solutions at scale.',
        },
    ];

    return (
        <section className="certifications section" id="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Credentials</span>
                    <h2 className="section-title">Certifications</h2>
                </div>
                <div className="certs-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-card">
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-content">
                                <h3>{cert.title}</h3>
                                <span className="cert-issuer">{cert.issuer}</span>
                                <p>{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;
