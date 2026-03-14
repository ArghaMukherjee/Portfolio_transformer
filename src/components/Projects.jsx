import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useAnimations';
import AnimatedSection from './AnimatedSection';
import './Projects.css';

function Projects() {
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });
    const [activeDemo, setActiveDemo] = useState(null);

    const projects = [
        {
            id: 'vehicle-detection',
            icon: '🚗',
            title: 'Autonomous Vehicle Detection',
            tagline: 'Detect. Track. Navigate.',
            description: 'Real-time object detection system for autonomous vehicles using YOLOv5 and custom-trained models, achieving 95% accuracy.',
            tags: ['Computer Vision', 'YOLO', 'PyTorch', 'Real-time'],
            featured: true,
            hasDemo: true,
            demoType: 'vision',
            preview: {
                type: 'detection',
                objects: ['Car', 'Pedestrian', 'Cyclist', 'Traffic Sign']
            }
        },
        {
            id: 'healthcare-nlp',
            icon: '🏥',
            title: 'Healthcare NLP Platform',
            tagline: 'Extract. Classify. Summarize.',
            description: 'NLP platform for medical document processing, extracting key information from clinical notes with 92% precision.',
            tags: ['NLP', 'Healthcare', 'BERT', 'Transformers'],
            hasDemo: true,
            demoType: 'nlp',
            preview: {
                type: 'entities',
                entities: ['Diagnosis', 'Medication', 'Procedure', 'Date']
            }
        },
        {
            id: 'analytics-dashboard',
            icon: '📊',
            title: 'Predictive Analytics Dashboard',
            tagline: 'Analyze. Predict. Optimize.',
            description: 'End-to-end analytics platform with ML-powered forecasting, reducing prediction errors by 40%.',
            tags: ['ML', 'Analytics', 'Dashboard', 'Forecasting'],
            hasDemo: true,
            demoType: 'analytics',
            preview: {
                type: 'chart',
                data: [45, 62, 78, 85, 92, 88]
            }
        },
        {
            id: 'conversational-ai',
            icon: '🤖',
            title: 'Conversational AI Assistant',
            tagline: 'Understand. Respond. Learn.',
            description: 'Multi-domain chatbot using advanced NLP techniques, handling 10K+ daily conversations.',
            tags: ['Chatbot', 'NLP', 'Dialog Systems', 'Production'],
            hasDemo: true,
            demoType: 'chat',
            preview: {
                type: 'chat',
                messages: [
                    { role: 'user', text: 'What are my appointments today?' },
                    { role: 'ai', text: 'You have 2 appointments: 10 AM with Dr. Smith and 3 PM project sync.' }
                ]
            }
        },
        {
            id: 'document-ai',
            icon: '📄',
            title: 'Document Intelligence System',
            tagline: 'Scan. Extract. Digitize.',
            description: 'RAG-powered document processing with automatic extraction, classification, and intelligent Q&A over documents.',
            tags: ['RAG', 'LangChain', 'Vector DB', 'OCR'],
            hasDemo: true,
            demoType: 'document',
            preview: {
                type: 'document',
                stats: [
                    { label: 'Processed', value: '50K+' },
                    { label: 'Accuracy', value: '96%' },
                    { label: 'Speed', value: '<2s' }
                ]
            }
        },
        {
            id: 'image-generation',
            icon: '🎨',
            title: 'AI Image Generation Studio',
            tagline: 'Imagine. Create. Transform.',
            description: 'Text-to-image generation using Stable Diffusion with custom fine-tuned models for product and marketing visuals.',
            tags: ['Diffusion', 'Stable Diffusion', 'LoRA', 'Generation'],
            hasDemo: true,
            demoType: 'image',
            preview: {
                type: 'image',
                prompt: 'Professional product shot, studio lighting'
            }
        },
        // Game Demos Section
        {
            id: 'ai-snake',
            icon: '🐍',
            title: 'AI Snake Game',
            tagline: 'Play. Compete. Learn.',
            description: 'Classic snake game with AI opponent using pathfinding algorithms. Watch the AI navigate or challenge it yourself!',
            tags: ['Game AI', 'Pathfinding', 'A* Algorithm', 'Interactive'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'snake',
                elements: ['🐍', '🍎', '⬛']
            }
        },
        {
            id: 'ai-tictactoe',
            icon: '⭕',
            title: 'Tic-Tac-Toe AI',
            tagline: 'Think. Strategize. Win.',
            description: 'Unbeatable Tic-Tac-Toe using Minimax algorithm with alpha-beta pruning. Can you beat the AI?',
            tags: ['Minimax', 'Game Theory', 'Strategy', 'Unbeatable'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'tictactoe',
                board: ['X', 'O', 'X', '', 'O', '', '', 'X', 'O']
            }
        },
        {
            id: 'memory-match',
            icon: '🧠',
            title: 'Memory Match Challenge',
            tagline: 'Remember. Match. Score.',
            description: 'Test your memory against AI! The neural network learns your patterns and adapts its strategy.',
            tags: ['Memory', 'Pattern Recognition', 'Neural Network', 'Adaptive'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'memory',
                cards: ['🎮', '🎯', '🎲', '🎪']
            }
        },
        {
            id: 'ai-pong',
            icon: '🏓',
            title: 'AI Pong Arena',
            tagline: 'React. Predict. Dominate.',
            description: 'Classic Pong with reinforcement learning AI. The AI learns from each game and improves over time.',
            tags: ['Reinforcement Learning', 'Q-Learning', 'Real-time', 'Adaptive'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'pong',
                score: { player: 3, ai: 5 }
            }
        },
        {
            id: 'parking-simulator',
            icon: '🅿️',
            title: 'Parking Lot Simulator',
            tagline: 'Park. Maneuver. Master.',
            description: 'Practice parallel and perpendicular parking with AI guidance. Real-time collision detection and scoring system.',
            tags: ['Simulation', 'Physics Engine', 'Collision Detection', '2D Graphics'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'parking',
                slots: ['empty', 'car', 'player', 'car', 'empty']
            }
        },
        {
            id: 'driving-practice',
            icon: '🚗',
            title: 'Driving Practice Arena',
            tagline: 'Drive. Learn. Improve.',
            description: 'Virtual driving simulator with traffic rules, obstacles, and AI pedestrians. Perfect for learning road safety.',
            tags: ['Driving Sim', 'Traffic AI', 'Physics', 'Educational'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'driving',
                elements: ['road', 'car', 'traffic-light', 'pedestrian']
            }
        },
        {
            id: 'chess-ai',
            icon: '♟️',
            title: 'Chess AI Engine',
            tagline: 'Calculate. Move. Checkmate.',
            description: 'Play chess against a sophisticated AI using minimax with alpha-beta pruning. Multiple difficulty levels available.',
            tags: ['Chess', 'Minimax', 'Alpha-Beta', 'Strategy'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'chess',
                pieces: ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜']
            }
        },
        {
            id: 'maze-runner',
            icon: '🏃',
            title: 'AI Maze Runner',
            tagline: 'Navigate. Solve. Escape.',
            description: 'Watch AI agents solve procedurally generated mazes using BFS, DFS, and A* pathfinding algorithms.',
            tags: ['Pathfinding', 'BFS/DFS', 'A* Search', 'Visualization'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'maze',
                path: ['start', 'path', 'path', 'end']
            }
        },
        {
            id: 'tower-defense',
            icon: '🗼',
            title: 'Tower Defense AI',
            tagline: 'Build. Defend. Conquer.',
            description: 'Strategic tower defense with AI enemies that learn and adapt to your defense patterns.',
            tags: ['Tower Defense', 'Adaptive AI', 'Strategy', 'Real-time'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'tower',
                towers: ['🗼', '🏰', '⚔️']
            }
        },
        {
            id: 'space-shooter',
            icon: '🚀',
            title: 'Space Shooter Arena',
            tagline: 'Shoot. Dodge. Survive.',
            description: 'Classic arcade shooter with AI-powered enemy formations and adaptive difficulty system.',
            tags: ['Arcade', 'Shooter', 'Adaptive Difficulty', 'Retro'],
            hasDemo: true,
            demoType: 'game',
            preview: {
                type: 'game',
                gameType: 'space',
                score: 12500
            }
        },
        {
            id: 'sentiment-demo',
            icon: '😊',
            title: 'Sentiment Analyzer',
            tagline: 'Analyze. Classify. Understand.',
            description: 'Real-time sentiment analysis of text using transformer models. Detects emotions and tone.',
            tags: ['NLP', 'Sentiment', 'Transformers', 'Real-time'],
            hasDemo: true,
            demoType: 'nlp',
            preview: {
                type: 'sentiment',
                text: 'I love this product!',
                sentiment: 'positive',
                score: 0.94
            }
        },
        // Telemetry Demo Section
        {
            id: 'telemetry-demo',
            icon: '🛡️',
            title: 'Secure Telemetry Pipeline',
            tagline: 'Track. Redact. Observe.',
            description: 'End-to-end on-prem system for agent telemetry, featuring real-time PII redaction and full execution tracing via Langfuse.',
            tags: ['Docker', 'Langfuse', 'Presidio', 'Security', 'Telemetry'],
            featured: true,
            hasDemo: true,
            demoType: 'telemetry',
            preview: {
                type: 'telemetry',
                logs: [
                    { time: '10:45:01', msg: 'Processing text...', status: 'info' },
                    { time: '10:45:02', msg: 'PII "John Doe" redacted -> [PERSON]', status: 'warn' },
                    { time: '10:45:02', msg: 'Trace successfully synced to Langfuse', status: 'success' }
                ]
            }
        },
        // Agentic AI Demos
        {
            id: 'agentic-research',
            icon: '🔍',
            title: 'Autonomous Research Agent',
            tagline: 'Search. Compile. Output.',
            description: 'A multi-step agent that browses the web autonomously, extracts information, and synthesizes comprehensive research reports.',
            tags: ['Agentic AI', 'Web Search', 'Data Synthesis', 'Autonomous'],
            featured: true,
            hasDemo: true,
            demoType: 'agent-research',
            preview: {
                type: 'agent-research',
                steps: ['Querying Google...', 'Reading 3 sources...', 'Extracting data...', 'Formatting report...']
            }
        },
        {
            id: 'agentic-coder',
            icon: '⌨️',
            title: 'Auto-Coding Engineer Agent',
            tagline: 'Plan. Write. Debug.',
            description: 'An AI engineer that writes, executes, and fixes code in a sandboxed environment based on natural language requirements.',
            tags: ['Agentic AI', 'Code Generation', 'Execution Sandbox', 'Dev Tool'],
            featured: true,
            hasDemo: true,
            demoType: 'agent-coder',
            preview: {
                type: 'agent-coder',
                tasks: [
                    { t: 'Understand requirements', d: true },
                    { t: 'Write python script', d: true },
                    { t: 'Test output', d: false }
                ]
            }
        },
        {
            id: 'agentic-orchestrator',
            icon: '🤝',
            title: 'Multi-Agent Orchestrator',
            tagline: 'Collaborate. Verify. Deliver.',
            description: 'A sovereign system where specialized LLM agents (e.g., Researcher, Writer, Reviewer) collaborate to solve complex, compound tasks.',
            tags: ['Agentic AI', 'Multi-Agent', 'Orchestration', 'LLM Agents'],
            hasDemo: true,
            demoType: 'agent-orchestrator',
            preview: {
                type: 'agent-orchestrator',
                agents: ['Researcher', 'Reviewer', 'Writer']
            }
        },
        {
            id: 'agentic-support',
            icon: '🛠️',
            title: 'Autonomous Support Resolver',
            tagline: 'Understand. Act. Resolve.',
            description: 'Unlike basic chatbots, this agent takes real actions (like processing refunds or querying a DB) to autonomously resolve tickets.',
            tags: ['Agentic AI', 'Action Calling', 'Support', 'Automation'],
            hasDemo: true,
            demoType: 'agent-support',
            preview: {
                type: 'agent-support',
                actions: ['Check Order #1024', 'Verify Shipping', 'Issue Partial Refund']
            }
        },
    ];

    const renderPreview = (project) => {
        const preview = project.preview;
        switch (preview.type) {
            case 'detection':
                return (
                    <div className="preview-detection">
                        <div className="detection-frame">
                            {/* Simulated road scene */}
                            <div className="detection-scene">
                                <div className="scene-road"></div>
                                <div className="scene-car">🚗</div>
                                <div className="scene-person">🚶</div>
                            </div>
                            <div className="detection-box" style={{ top: '25%', left: '10%', width: '35%', height: '50%' }}>
                                <span className="detection-label">Car 98%</span>
                            </div>
                            <div className="detection-box detection-box--person" style={{ top: '30%', left: '60%', width: '20%', height: '45%' }}>
                                <span className="detection-label">Person 94%</span>
                            </div>
                            <div className="detection-overlay"></div>
                        </div>
                        <div className="detection-stats">
                            {preview.objects.map((obj, i) => (
                                <span key={i} className="detection-tag">{obj}</span>
                            ))}
                        </div>
                    </div>
                );
            case 'entities':
                return (
                    <div className="preview-entities">
                        <div className="entity-text">
                            Patient presented with <span className="entity entity--diagnosis">acute bronchitis</span>.
                            Prescribed <span className="entity entity--medication">Amoxicillin 500mg</span> for 7 days.
                            Follow-up on <span className="entity entity--date">Jan 15, 2024</span>.
                        </div>
                        <div className="entity-legend">
                            {preview.entities.map((ent, i) => (
                                <span key={i} className={`entity-tag entity-tag--${ent.toLowerCase()}`}>{ent}</span>
                            ))}
                        </div>
                    </div>
                );
            case 'chart':
                return (
                    <div className="preview-chart">
                        <div className="chart-bars">
                            {preview.data.map((val, i) => (
                                <div key={i} className="chart-bar" style={{ height: `${val}%` }}>
                                    <span className="chart-value">{val}%</span>
                                </div>
                            ))}
                        </div>
                        <div className="chart-labels">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, i) => (
                                <span key={i}>{m}</span>
                            ))}
                        </div>
                    </div>
                );
            case 'chat':
                return (
                    <div className="preview-chat">
                        {preview.messages.map((msg, i) => (
                            <div key={i} className={`chat-bubble chat-bubble--${msg.role}`}>
                                <span className="chat-icon">{msg.role === 'user' ? '👤' : '🤖'}</span>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'document':
                return (
                    <div className="preview-document">
                        <div className="doc-stats-row">
                            {preview.stats.map((stat, i) => (
                                <div key={i} className="doc-stat-item">
                                    <span className="doc-stat-num">{stat.value}</span>
                                    <span className="doc-stat-lbl">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="doc-query-bar">
                            🔍 "Extract invoice total and due date"
                        </div>
                    </div>
                );
            case 'image':
                return (
                    <div className="preview-image">
                        <div className="image-gen-placeholder">
                            <span className="gen-icon">🎨</span>
                            <div className="gen-progress">
                                <div className="gen-progress-bar"></div>
                            </div>
                            <span className="gen-text">Generating...</span>
                        </div>
                        <div className="prompt-display">
                            ✨ "{preview.prompt}"
                        </div>
                    </div>
                );
            case 'game':
                // Game-specific previews
                switch (preview.gameType) {
                    case 'snake':
                        return (
                            <div className="preview-game preview-game--snake">
                                <div className="snake-grid">
                                    {[...Array(25)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`snake-cell ${i === 12 ? 'snake-head' : i === 7 ? 'snake-food' : i === 11 || i === 13 ? 'snake-body' : ''}`}
                                        />
                                    ))}
                                </div>
                                <div className="game-score">Score: 24</div>
                            </div>
                        );
                    case 'tictactoe':
                        return (
                            <div className="preview-game preview-game--tictactoe">
                                <div className="ttt-grid">
                                    {preview.board.map((cell, i) => (
                                        <div key={i} className={`ttt-cell ${cell ? `ttt-${cell.toLowerCase()}` : ''}`}>
                                            {cell}
                                        </div>
                                    ))}
                                </div>
                                <div className="game-status">AI is thinking...</div>
                            </div>
                        );
                    case 'memory':
                        return (
                            <div className="preview-game preview-game--memory">
                                <div className="memory-grid">
                                    {preview.cards.concat(preview.cards).map((card, i) => (
                                        <div key={i} className={`memory-card ${i < 2 ? 'flipped' : ''}`}>
                                            {i < 2 ? card : '❓'}
                                        </div>
                                    ))}
                                </div>
                                <div className="game-score">Matches: 2/4</div>
                            </div>
                        );
                    case 'pong':
                        return (
                            <div className="preview-game preview-game--pong">
                                <div className="pong-arena">
                                    <div className="pong-paddle pong-paddle--player"></div>
                                    <div className="pong-ball"></div>
                                    <div className="pong-paddle pong-paddle--ai"></div>
                                </div>
                                <div className="pong-score">
                                    <span>You: {preview.score.player}</span>
                                    <span>AI: {preview.score.ai}</span>
                                </div>
                            </div>
                        );
                    case 'parking':
                        return (
                            <div className="preview-game preview-game--parking">
                                <div className="parking-lot">
                                    {preview.slots.map((slot, i) => (
                                        <div
                                            key={i}
                                            className={`parking-slot ${slot === 'player' ? 'parking-slot--player' : slot === 'car' ? 'parking-slot--occupied' : ''}`}
                                        >
                                            {slot === 'player' ? '🚙' : slot === 'car' ? '🚗' : ''}
                                        </div>
                                    ))}
                                </div>
                                <div className="game-status">🎯 Park in the empty slot!</div>
                            </div>
                        );
                    case 'driving':
                        return (
                            <div className="preview-game preview-game--driving">
                                <div className="driving-road">
                                    <div className="road-lane"></div>
                                    <div className="road-lane road-lane--center"></div>
                                    <div className="road-lane"></div>
                                    <div className="player-car">🚙</div>
                                    <div className="traffic-light">🚦</div>
                                </div>
                                <div className="game-status">⚠️ Stop at red light!</div>
                            </div>
                        );
                    case 'chess':
                        return (
                            <div className="preview-game preview-game--chess">
                                <div className="chess-board">
                                    {preview.pieces.map((piece, i) => (
                                        <div key={i} className="chess-cell">
                                            <span className="chess-piece">{piece}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="game-status">♟️ Your move!</div>
                            </div>
                        );
                    case 'maze':
                        return (
                            <div className="preview-game preview-game--maze">
                                <div className="maze-grid">
                                    <div className="maze-cell maze-start">🚀</div>
                                    <div className="maze-cell maze-path"></div>
                                    <div className="maze-cell maze-wall"></div>
                                    <div className="maze-cell maze-path"></div>
                                    <div className="maze-cell maze-wall"></div>
                                    <div className="maze-cell maze-path"></div>
                                    <div className="maze-cell maze-path"></div>
                                    <div className="maze-cell maze-path"></div>
                                    <div className="maze-cell maze-end">🎯</div>
                                </div>
                                <div className="game-status">🔍 Finding shortest path...</div>
                            </div>
                        );
                    case 'tower':
                        return (
                            <div className="preview-game preview-game--tower">
                                <div className="tower-battlefield">
                                    {preview.towers.map((t, i) => (
                                        <div key={i} className="tower-unit">{t}</div>
                                    ))}
                                    <div className="enemy-wave">👾👾👾</div>
                                </div>
                                <div className="game-status">Wave 3 incoming!</div>
                            </div>
                        );
                    case 'space':
                        return (
                            <div className="preview-game preview-game--space">
                                <div className="space-arena">
                                    <div className="space-enemies">👾 👾 👾</div>
                                    <div className="space-player">🚀</div>
                                    <div className="space-bullets">💥</div>
                                </div>
                                <div className="game-score">Score: {preview.score.toLocaleString()}</div>
                            </div>
                        );
                    default:
                        return null;
                }
            case 'sentiment':
                return (
                    <div className="preview-sentiment">
                        <div className="sentiment-text">"{preview.text}"</div>
                        <div className={`sentiment-result sentiment-result--${preview.sentiment}`}>
                            <span className="sentiment-emoji">
                                {preview.sentiment === 'positive' ? '😊' : preview.sentiment === 'negative' ? '😔' : '😐'}
                            </span>
                            <span className="sentiment-label">{preview.sentiment}</span>
                            <span className="sentiment-score">{(preview.score * 100).toFixed(0)}%</span>
                        </div>
                    </div>
                );
            case 'telemetry':
                return (
                    <div className="preview-telemetry" style={{ padding: '1rem', background: '#0a0a0f', borderRadius: '8px', border: '1px solid rgba(139, 92, 246, 0.2)', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.5rem' }}>
                            <span style={{ color: '#00D1FF' }}>⚙️</span> 
                            <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 'bold' }}>TELEMETRY LOGS</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                            {preview.logs.map((log, i) => (
                                <div key={i} style={{ display: 'flex', gap: '0.5rem', opacity: i === 2 ? 1 : 0.7 }}>
                                    <span style={{ color: '#6B7280' }}>[{log.time}]</span>
                                    <span style={{ color: log.status === 'success' ? '#10B981' : log.status === 'warn' ? '#FBBF24' : '#60A5FA' }}>
                                        {log.msg}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px', borderLeft: '3px solid #10B981' }}>
                            <span style={{ fontSize: '0.7rem', color: '#10B981' }}>STATUS: ACTIVE • TRACING CONNECTED</span>
                        </div>
                    </div>
                );
            case 'agent-research':
                return (
                    <div className="preview-agent" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #374151' }}>
                        <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>Agent Steps:</div>
                        {preview.steps.map((step, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: i === preview.steps.length -1 ? '#10B981' : '#E5E7EB' }}>
                                <span>{i === preview.steps.length - 1 ? '✨' : '🔄'}</span> {step}
                            </div>
                        ))}
                    </div>
                );
            case 'agent-coder':
                return (
                    <div className="preview-agent" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #374151', fontFamily: 'monospace' }}>
                        <div style={{ fontSize: '0.8rem', color: '#8B5CF6', marginBottom: '0.5rem' }}>$ DEV_AGENT --RUN</div>
                        {preview.tasks.map((task, i) => (
                            <div key={i} style={{ fontSize: '0.75rem', color: task.d ? '#10B981' : '#FBBF24' }}>
                                [{task.d ? '✓' : '...'}] {task.t}
                            </div>
                        ))}
                    </div>
                );
            case 'agent-orchestrator':
                return (
                    <div className="preview-agent" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', background: '#111827', padding: '1.5rem', borderRadius: '8px', border: '1px solid #374151' }}>
                        {preview.agents.map((agent, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🤖</div>
                                <span style={{ fontSize: '0.6rem', color: '#9CA3AF' }}>{agent}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'agent-support':
                return (
                    <div className="preview-agent" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #374151' }}>
                        <div style={{ fontSize: '0.75rem', color: '#60A5FA', borderBottom: '1px solid #1F2937', paddingBottom: '0.4rem', marginBottom: '0.2rem' }}>Calling Actions...</div>
                        {preview.actions.map((act, i) => (
                            <div key={i} style={{ fontSize: '0.7rem', color: '#D1D5DB', background: '#1F2937', padding: '0.3rem 0.5rem', borderRadius: '4px' }}>
                                ⚡ {act}
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <AnimatedSection className="section-header">
                    <span className="section-tag">Generative AI Portfolio</span>
                    <h2 className="section-title shimmer-text">AI-Powered Projects</h2>
                    <p className="section-subtitle">
                        Interactive demonstrations of production-grade AI solutions
                    </p>
                </AnimatedSection>

                <div
                    ref={gridRef}
                    className={`projects-grid stagger-children ${gridVisible ? 'visible' : ''}`}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card glass-card ${project.featured ? 'featured' : ''} ${activeDemo === project.id ? 'demo-active' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => project.hasDemo && setActiveDemo(project.id)}
                            onMouseLeave={() => setActiveDemo(null)}
                        >
                            {/* Project Header */}
                            <div className="project-header">
                                <div className="project-icon-wrap">
                                    <span className="project-icon">{project.icon}</span>
                                </div>
                                <div className="project-category">
                                    {project.tags[0]}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                {project.tagline && (
                                    <p className="project-tagline">{project.tagline}</p>
                                )}
                                <p className="project-description">{project.description}</p>
                            </div>

                            {/* Preview Window */}
                            {project.hasDemo && activeDemo === project.id && (
                                <div className="project-preview-window">
                                    <div className="preview-header">
                                        <div className="preview-dots">
                                            <span></span><span></span><span></span>
                                        </div>
                                        <span className="preview-title">Live Preview</span>
                                    </div>
                                    <div className="preview-body">
                                        {renderPreview(project)}
                                    </div>
                                </div>
                            )}

                            {/* Tags */}
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            {/* Try Demo Button */}
                            {project.hasDemo && (
                                <Link to={`/demos#${project.id}`} className="try-demo-btn">
                                    <span>Try Demo</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
