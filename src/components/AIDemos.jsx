import { useState, useEffect } from 'react';
import './AIDemos.css';

// Demo ID mapping from Projects.jsx IDs to AIDemos IDs
const projectToDemoMapping = {
    // AI/ML Projects
    'vehicle-detection': 'image-gen',
    'healthcare-nlp': 'doc-intel',
    'analytics-dashboard': 'data-agent',
    'conversational-ai': 'text-gen',
    'document-ai': 'doc-intel',
    'image-generation': 'image-gen',
    'sentiment-demo': 'text-gen',
    // Game demos don't have corresponding AIDemos, show text-gen as default
    'ai-snake': 'code-assist',
    'ai-tictactoe': 'code-assist',
    'memory-match': 'code-assist',
    'ai-pong': 'code-assist',
    'parking-simulator': 'code-assist',
    'driving-practice': 'code-assist',
    'chess-ai': 'code-assist',
    'maze-runner': 'code-assist',
    'tower-defense': 'code-assist',
    'space-shooter': 'code-assist',
};

const demos = [
    {
        id: 'text-gen',
        category: 'Natural Language',
        icon: '💬',
        name: 'AI Text Generator',
        tagline: 'Write. Enhance. Transform.',
        description: 'Generate high-quality content using advanced LLMs. Create blog posts, marketing copy, and technical documentation with natural language prompts.',
        features: ['GPT-4 powered', 'Multi-language', 'Tone control'],
        preview: {
            type: 'chat',
            messages: [
                { role: 'user', text: 'Write a product description for an AI assistant' },
                { role: 'ai', text: 'Introducing your intelligent companion — an AI assistant that learns your preferences...' }
            ]
        },
        demoUrl: '#demo-text-gen'
    },
    {
        id: 'code-assist',
        category: 'Developer Tools',
        icon: '🧠',
        name: 'Code Intelligence',
        tagline: 'Code. Debug. Optimize.',
        description: 'AI-powered code completion, bug detection, and optimization suggestions. Supports 20+ programming languages with context-aware recommendations.',
        features: ['Multi-language', 'Real-time suggestions', 'Code review'],
        preview: {
            type: 'code',
            language: 'python',
            code: `def optimize_query(data):
    # AI suggestion: Use vectorized ops
    return np.array(data).mean()`
        },
        demoUrl: '#demo-code-assist'
    },
    {
        id: 'image-gen',
        category: 'Computer Vision',
        icon: '🎨',
        name: 'Image Synthesis',
        tagline: 'Imagine. Create. Visualize.',
        description: 'Transform text descriptions into stunning visuals. Generate product mockups, artwork, and design concepts using diffusion models.',
        features: ['Text-to-image', 'Style transfer', 'Inpainting'],
        preview: {
            type: 'image',
            prompt: 'Futuristic cityscape at sunset',
            placeholder: '🌆'
        },
        demoUrl: '#demo-image-gen'
    },
    {
        id: 'doc-intel',
        category: 'Document AI',
        icon: '📄',
        name: 'Document Intelligence',
        tagline: 'Extract. Analyze. Summarize.',
        description: 'Automatically extract insights from documents, contracts, and reports. RAG-powered question answering with source citations.',
        features: ['PDF/OCR support', 'RAG search', 'Summarization'],
        preview: {
            type: 'document',
            stats: [
                { label: 'Documents', value: '1,247' },
                { label: 'Queries', value: '8.5K' },
                { label: 'Accuracy', value: '96%' }
            ]
        },
        demoUrl: '#demo-doc-intel'
    },
    {
        id: 'voice-ai',
        category: 'Speech & Audio',
        icon: '🎙️',
        name: 'Voice AI Studio',
        tagline: 'Listen. Transcribe. Synthesize.',
        description: 'Real-time speech recognition and natural voice synthesis. Create voiceovers, transcriptions, and voice clones with studio quality.',
        features: ['Real-time STT', 'Voice cloning', 'Multi-accent'],
        preview: {
            type: 'audio',
            waveform: true
        },
        demoUrl: '#demo-voice-ai'
    },
    {
        id: 'data-agent',
        category: 'Business Intelligence',
        icon: '📊',
        name: 'Data Analyst Agent',
        tagline: 'Query. Visualize. Decide.',
        description: 'Ask questions about your data in plain English. Get instant charts, insights, and recommendations powered by autonomous AI agents.',
        features: ['Natural queries', 'Auto-visualization', 'Predictive insights'],
        preview: {
            type: 'chart',
            data: [65, 78, 90, 85, 92]
        },
        demoUrl: '#demo-data-agent'
    }
];

function AIDemos() {
    const [activeDemo, setActiveDemo] = useState(demos[0]);

    // Handle hash-based demo selection
    useEffect(() => {
        const handleSelectDemo = (event) => {
            const { demoId } = event.detail;
            // Try direct match first
            let demo = demos.find(d => d.id === demoId);

            // If no direct match, try project-to-demo mapping
            if (!demo && projectToDemoMapping[demoId]) {
                demo = demos.find(d => d.id === projectToDemoMapping[demoId]);
            }

            if (demo) {
                setActiveDemo(demo);
            }
        };

        // Listen for custom event from DemosPage
        window.addEventListener('selectDemo', handleSelectDemo);

        // Check URL hash on mount
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            // Try direct match
            let demo = demos.find(d => d.id === hash);
            // Try mapping
            if (!demo && projectToDemoMapping[hash]) {
                demo = demos.find(d => d.id === projectToDemoMapping[hash]);
            }
            if (demo) {
                setActiveDemo(demo);
            }
        }

        return () => {
            window.removeEventListener('selectDemo', handleSelectDemo);
        };
    }, []);

    const renderPreview = (preview) => {
        switch (preview.type) {
            case 'chat':
                return (
                    <div className="demo-preview demo-preview--chat">
                        <div className="preview-window">
                            <div className="preview-header">
                                <div className="preview-dots">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="preview-content">
                                {preview.messages.map((msg, i) => (
                                    <div key={i} className={`chat-message chat-message--${msg.role}`}>
                                        <span className="chat-role">{msg.role === 'user' ? '👤' : '🤖'}</span>
                                        <p>{msg.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'code':
                return (
                    <div className="demo-preview demo-preview--code">
                        <div className="preview-window">
                            <div className="preview-header">
                                <div className="preview-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <span className="preview-lang">{preview.language}</span>
                            </div>
                            <div className="preview-content">
                                <pre><code>{preview.code}</code></pre>
                                <div className="ai-suggestion">
                                    <span className="ai-badge">✨ AI</span>
                                    <span>Optimized with vectorization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'image':
                return (
                    <div className="demo-preview demo-preview--image">
                        <div className="preview-window">
                            <div className="preview-header">
                                <div className="preview-dots">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="preview-content">
                                <div className="image-placeholder">
                                    <span>{preview.placeholder}</span>
                                    <div className="generating">Generating...</div>
                                </div>
                                <div className="prompt-bar">
                                    <span className="prompt-icon">🎨</span>
                                    <span className="prompt-text">{preview.prompt}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'document':
                return (
                    <div className="demo-preview demo-preview--document">
                        <div className="preview-window">
                            <div className="preview-header">
                                <div className="preview-dots">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="preview-content">
                                <div className="doc-stats">
                                    {preview.stats.map((stat, i) => (
                                        <div key={i} className="doc-stat">
                                            <span className="doc-stat-value">{stat.value}</span>
                                            <span className="doc-stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="doc-search">
                                    <span>🔍</span>
                                    <span>"What is the contract renewal date?"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'audio':
                return (
                    <div className="demo-preview demo-preview--audio">
                        <div className="preview-window">
                            <div className="preview-header">
                                <div className="preview-dots">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="preview-content">
                                <div className="waveform">
                                    {[...Array(20)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="wave-bar"
                                            style={{
                                                height: `${20 + Math.random() * 60}%`,
                                                animationDelay: `${i * 0.05}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="audio-controls">
                                    <button className="play-btn">▶️</button>
                                    <span className="audio-time">00:00 / 01:24</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'chart':
                return (
                    <div className="demo-preview demo-preview--chart">
                        <div className="preview-window">
                            <div className="preview-header">
                                <div className="preview-dots">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="preview-content">
                                <div className="chart-visual">
                                    {preview.data.map((value, i) => (
                                        <div
                                            key={i}
                                            className="chart-bar"
                                            style={{ height: `${value}%` }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="chart-query">
                                    <span>💬</span>
                                    <span>"Show Q4 revenue by region"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="ai-demos section" id="demos">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Generative AI Portfolio</span>
                    <h2 className="section-title">AI-Powered Demos</h2>
                    <p className="section-subtitle">
                        Explore interactive demonstrations of cutting-edge AI capabilities
                    </p>
                </div>

                {/* Demo Tabs */}
                <div className="demo-tabs">
                    {demos.map((demo) => (
                        <button
                            key={demo.id}
                            className={`demo-tab ${activeDemo.id === demo.id ? 'demo-tab--active' : ''}`}
                            onClick={() => setActiveDemo(demo)}
                        >
                            <span className="demo-tab-icon">{demo.icon}</span>
                            <span className="demo-tab-name">{demo.name.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>

                {/* Active Demo Card */}
                <div className="demo-showcase">
                    <div className="demo-info">
                        <span className="demo-category">{activeDemo.category}</span>
                        <h3 className="demo-name">{activeDemo.name}</h3>
                        <p className="demo-tagline">{activeDemo.tagline}</p>
                        <p className="demo-description">{activeDemo.description}</p>

                        <div className="demo-features">
                            {activeDemo.features.map((feature, i) => (
                                <span key={i} className="demo-feature">
                                    <span className="feature-check">✓</span>
                                    {feature}
                                </span>
                            ))}
                        </div>

                        <a href={activeDemo.demoUrl} className="demo-btn">
                            <span>Try Demo</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="demo-preview-container">
                        {renderPreview(activeDemo.preview)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AIDemos;
