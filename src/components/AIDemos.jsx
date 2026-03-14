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
    'telemetry-demo': 'telemetry-studio',
    'agentic-research': 'agent-research-demo',
    'agentic-coder': 'agent-coder-demo',
    'agentic-orchestrator': 'agent-orch-demo',
    'agentic-support': 'agent-support-demo',
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
    },
    {
        id: 'telemetry-studio',
        category: 'Security & Ops',
        icon: '🛡️',
        name: 'Telemetry & Security',
        tagline: 'Monitor. Redact. Analyze.',
        description: 'Interactive demonstration of a secure on-prem LLM telemetry pipeline. Features real-time PII redaction via Microsoft Presidio and execution tracing via Langfuse.',
        features: ['PII/PHI Redaction', 'Full traces', 'Dockerized'],
        preview: {
            type: 'telemetryStream',
            logs: [
                { id: 1, text: "User Input: My name is Alice and phone is 555-0199", type: "input" },
                { id: 2, text: "Presidio: Detecting PII entities...", type: "system" },
                { id: 3, text: "Redacted: My name is [PERSON] and phone is [PHONE_NUMBER]", type: "secure" },
                { id: 4, text: "Langfuse: Trace created (id: tr_8f92a1)", type: "trace" }
            ]
        },
        demoUrl: '#demo-telemetry'
    },
    // Agentic AI Demos
    {
        id: 'agent-research-demo',
        category: 'Agentic AI',
        icon: '🔍',
        name: 'Autonomous Research',
        tagline: 'Search. Compile. Output.',
        description: 'See how a sovereign agent autonomously browses the web, reads multiple sources, synthesizes data, and generates a structured research report.',
        features: ['Web Browsing', 'Data Synthesis', 'Multi-step Planning'],
        preview: {
            type: 'agent-interactive',
            agentType: 'research',
            messages: [
                { source: 'user', text: 'Research the impact of quantum computing on modern cryptography.' },
                { source: 'agent', isAction: true, text: 'Executing search query: "quantum computing impact cryptography post-quantum"' },
                { source: 'agent', isAction: true, text: 'Reading 3 top sources... Extracting key algorithms (Shor\'s algorithm).' },
                { source: 'agent', text: 'Here is your comprehensive report on Post-Quantum Cryptography...' }
            ]
        },
        demoUrl: '#demo-agent-research'
    },
    {
        id: 'agent-coder-demo',
        category: 'Agentic AI',
        icon: '⌨️',
        name: 'Auto-Coding Engineer',
        tagline: 'Plan. Write. Debug.',
        description: 'Watch an AI software engineer agent plan architecture, write code in an isolated sandbox, run tests, and debug errors autonomously.',
        features: ['Code Execution', 'Self-Debugging', 'Architecture Planning'],
        preview: {
            type: 'agent-interactive',
            agentType: 'coder',
            messages: [
                { source: 'user', text: 'Write a Python script to scrape hacker news headlines.' },
                { source: 'agent', isAction: true, text: 'Generating plan & writing `scraper.py` using BeautifulSoup.' },
                { source: 'agent', isAction: true, text: 'Running `python scraper.py`... Error: requests module not found.' },
                { source: 'agent', isAction: true, text: 'Executing `pip install requests` and re-running...' },
                { source: 'agent', text: 'Task complete! Output log shows 30 parsed headlines.' }
            ]
        },
        demoUrl: '#demo-agent-coder'
    },
    {
        id: 'agent-orch-demo',
        category: 'Agentic AI',
        icon: '🤝',
        name: 'Multi-Agent Orchestrator',
        tagline: 'Collaborate. Verify. Deliver.',
        description: 'Experience a multi-agent system where a Manager agent coordinates a specialized Researcher, Writer, and Reviewer to complete a complex task.',
        features: ['Agent Collaboration', 'Peer Review', 'Routing'],
        preview: {
            type: 'agent-interactive',
            agentType: 'orchestrator',
            messages: [
                { source: 'user', text: 'Write a blog post about Mars colonization.' },
                { source: 'agent', role: 'Manager', isAction: true, text: 'Routing task to [Researcher]...' },
                { source: 'agent', role: 'Researcher', isAction: true, text: 'Gathered facts: SpaceX timeline, atmospheric challenges.' },
                { source: 'agent', role: 'Writer', isAction: true, text: 'Drafted article based on research.' },
                { source: 'agent', role: 'Reviewer', text: 'Approved. Grammar and facts verified.' }
            ]
        },
        demoUrl: '#demo-agent-orch'
    },
    {
        id: 'agent-support-demo',
        category: 'Agentic AI',
        icon: '🛠️',
        name: 'Autonomous Support',
        tagline: 'Understand. Act. Resolve.',
        description: 'This agent goes beyond chatting—it actually executes tools like querying customer databases and issuing refunds through APIs.',
        features: ['Tool Calling', 'API Execution', 'Intent Resolution'],
        preview: {
            type: 'agent-interactive',
            agentType: 'support',
            messages: [
                { source: 'user', text: 'My package #1024 arrived damaged. I want a refund.' },
                { source: 'agent', isAction: true, text: 'Tool Call: `check_order({ order_id: 1024 })` -> Status: Delivered.' },
                { source: 'agent', isAction: true, text: 'Tool Call: `process_refund({ order_id: 1024, amount: "full" })` -> Success.' },
                { source: 'agent', text: 'I am so sorry about the damage! I have fully refunded order #1024 to your original payment method.' }
            ]
        },
        demoUrl: '#demo-agent-support'
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
            case 'telemetryStream':
                return (
                    <div className="demo-preview demo-preview--telemetry">
                        <div className="preview-window" style={{ background: '#050505', border: '1px solid #333' }}>
                            <div className="preview-header" style={{ borderBottom: '1px solid #222' }}>
                                <div className="preview-dots">
                                    <span style={{ background: '#ef4444' }}></span>
                                    <span style={{ background: '#eab308' }}></span>
                                    <span style={{ background: '#22c55e' }}></span>
                                </div>
                                <span className="preview-lang" style={{ color: '#10B981', fontSize: '12px' }}>● Live Monitoring</span>
                            </div>
                            <div className="preview-content" style={{ padding: '1.5rem', fontFamily: 'monospace' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {preview.logs.map((log) => (
                                        <div key={log.id} style={{
                                            padding: '0.8rem', 
                                            borderRadius: '6px',
                                            background: log.type === 'input' ? 'rgba(59, 130, 246, 0.1)' : 
                                                        log.type === 'system' ? 'rgba(156, 163, 175, 0.1)' : 
                                                        log.type === 'secure' ? 'rgba(16, 185, 129, 0.1)' : 
                                                        'rgba(245, 158, 11, 0.1)',
                                            borderLeft: `3px solid ${
                                                log.type === 'input' ? '#3B82F6' : 
                                                log.type === 'system' ? '#9CA3AF' : 
                                                log.type === 'secure' ? '#10B981' : 
                                                '#F59E0B'
                                            }`,
                                            color: '#E5E7EB',
                                            fontSize: '13px',
                                            lineHeight: '1.4'
                                        }}>
                                            <span style={{ 
                                                display: 'inline-block', 
                                                marginRight: '8px', 
                                                opacity: 0.7 
                                            }}>
                                                {log.type === 'input' ? '▶' : 
                                                 log.type === 'system' ? '⚙' : 
                                                 log.type === 'secure' ? '🛡️' : 
                                                 '📊'}
                                            </span>
                                            {log.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'agent-interactive':
                return (
                    <div className="demo-preview demo-preview--agent">
                        <div className="preview-window" style={{ background: '#111827', border: '1px solid #374151' }}>
                            <div className="preview-header" style={{ borderBottom: '1px solid #1F2937' }}>
                                <div className="preview-dots">
                                    <span style={{ background: '#6B7280' }}></span>
                                    <span style={{ background: '#6B7280' }}></span>
                                    <span style={{ background: '#6B7280' }}></span>
                                </div>
                                <span className="preview-lang" style={{ color: '#8B5CF6', fontSize: '13px' }}>Agent UI Workspace</span>
                            </div>
                            <div className="preview-content" style={{ padding: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {preview.messages.map((msg, i) => (
                                        <div key={i} style={{
                                            alignSelf: msg.source === 'user' ? 'flex-end' : 'flex-start',
                                            maxWidth: '85%',
                                            padding: '0.8rem 1rem',
                                            borderRadius: '8px',
                                            background: msg.source === 'user' ? '#3B82F6' : (msg.isAction ? '#1F2937' : '#374151'),
                                            color: '#FFF',
                                            fontSize: '14px',
                                            borderLeft: msg.isAction ? '3px solid #F59E0B' : 'none',
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                        }}>
                                            {msg.role && (
                                                <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                    {msg.role}
                                                </div>
                                            )}
                                            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                                {msg.isAction && <span style={{ color: '#F59E0B' }}>⚡</span>}
                                                <span style={{ fontFamily: msg.isAction ? 'monospace' : 'inherit', fontSize: msg.isAction ? '12px' : '14px', color: msg.isAction ? '#D1D5DB' : '#FFF' }}>
                                                    {msg.text}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
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
