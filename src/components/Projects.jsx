import { useState } from 'react';
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
                                <a href={`#demo-${project.id}`} className="try-demo-btn">
                                    <span>Try Demo</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
