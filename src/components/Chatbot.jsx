import { useState, useRef, useEffect } from 'react';

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! 👋 I'm Argha's AI assistant. Ask me anything about his background, skills, or experience!" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const messagesEndRef = useRef(null);

    // Knowledge base with QnA pairs
    const qaDatabase = {
        greetings: {
            patterns: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good evening'],
            response: "Hello! 👋 I'm here to help you learn about Argha. What would you like to know?"
        },
        name: {
            patterns: ['who is argha', 'who are you', 'tell me about argha', 'introduce', 'yourself'],
            response: "Argha Mukherjee is an AI/ML Leader & Data Science Expert with over 8+ years of experience. He's currently leading AI initiatives at IKS Health and pursuing a DBA at Golden Gate University."
        },
        education: {
            patterns: ['education', 'degree', 'university', 'study', 'qualification', 'academic', 'school', 'college'],
            response: "Argha has an impressive educational background:\n\n🎓 DBA (Pursuing) - Golden Gate University\n🎓 MS in Machine Learning & AI - Liverpool John Moores University\n🎓 PG Diploma in ML & AI - IIIT Bangalore\n🎓 PG in Product Management - Duke University\n🎓 B.E. in Computer Science - VTU"
        },
        skills: {
            patterns: ['skills', 'expertise', 'technologies', 'tech stack', 'programming', 'what can he do'],
            response: "Argha's key expertise includes:\n\n🤖 Machine Learning (95%)\n🧠 Deep Learning (90%)\n💬 Natural Language Processing (92%)\n👁️ Computer Vision (85%)\n🐍 Python (95%)\n🔥 TensorFlow/PyTorch (88%)"
        },
        experience: {
            patterns: ['experience', 'work', 'job', 'company', 'career', 'working', 'role'],
            response: "Argha currently works at IKS Health leading AI/ML initiatives in healthcare technology. He has also collaborated with Carnegie Mellon University and contributed to projects at IBM Watson Health."
        },
        contact: {
            patterns: ['contact', 'email', 'reach', 'hire', 'connect', 'linkedin', 'message'],
            response: "You can connect with Argha through:\n\n📅 Book a Session: topmate.io/arghamukherjee\n💼 LinkedIn: linkedin.com/in/arghamukherjee04\n🌐 Website: www.arghamukherjee.com"
        },
        projects: {
            patterns: ['projects', 'portfolio', 'work samples', 'built', 'created'],
            response: "Argha has worked on 50+ projects including:\n\n🚗 Autonomous Vehicle Detection (95% accuracy)\n🏥 Healthcare NLP Platform\n📊 Predictive Analytics Dashboard\n🤖 Conversational AI Assistant (10K+ daily conversations)"
        },
        certifications: {
            patterns: ['certification', 'certificate', 'certified', 'credentials'],
            response: "Argha holds 15+ certifications including:\n\n🧠 Deep Learning Specialization - deeplearning.ai\n💬 NLP Certification - Coursera\n☁️ Azure AI-900 - Microsoft\n🔬 TensorFlow Developer - Google\n📈 Data Science Professional - IBM"
        },
        research: {
            patterns: ['research', 'phd', 'dba', 'thesis', 'doctoral'],
            response: "Argha is currently pursuing a Doctorate in Business Administration (DBA) at Golden Gate University. His research focuses on Data Morphing using AI and CyberSecurity."
        },
        fallback: {
            response: "I'm not sure about that. You can ask me about Argha's:\n\n• Education & Qualifications\n• Skills & Expertise\n• Work Experience\n• Projects\n• Certifications\n• Contact Information"
        }
    };

    const suggestedQuestions = [
        "Who is Argha?",
        "What are his skills?",
        "Tell me about his education",
        "How can I contact him?"
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const findResponse = (input) => {
        const normalizedInput = input.toLowerCase().trim();

        // Helper function to check if a pattern exists as a whole word (not part of another word)
        const matchesAsWord = (text, pattern) => {
            const regex = new RegExp(`\\b${pattern}\\b`, 'i');
            return regex.test(text);
        };

        // Check for greetings first - but use word boundary matching
        // This prevents 'his' from matching 'hi'
        const isGreeting = qaDatabase.greetings.patterns.some(pattern => {
            return matchesAsWord(normalizedInput, pattern);
        });

        if (isGreeting) {
            return { text: qaDatabase.greetings.response, showSuggestions: true };
        }

        // Check other categories
        for (const [key, value] of Object.entries(qaDatabase)) {
            if (key === 'fallback' || key === 'greetings') continue;
            if (value.patterns.some(pattern => normalizedInput.includes(pattern))) {
                return { text: value.response, showSuggestions: false };
            }
        }

        return { text: qaDatabase.fallback.response, showSuggestions: true };
    };

    const handleSend = (text = inputValue) => {
        if (!text.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { type: 'user', text: text.trim() }]);
        setInputValue('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const response = findResponse(text);
            setMessages(prev => [...prev, { type: 'bot', text: response.text }]);
            setShowSuggestions(response.showSuggestions);
            setIsTyping(false);
        }, 800 + Math.random() * 400);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chatbot-container">
            {/* Chat Toggle Button */}
            <button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                )}
                {!isOpen && <span className="chatbot-pulse"></span>}
            </button>

            {/* Chat Window */}
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-avatar">🤖</div>
                    <div className="chatbot-info">
                        <span className="chatbot-name">Argha's Assistant</span>
                        <span className="chatbot-status">
                            <span className="status-dot"></span>
                            Online
                        </span>
                    </div>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.type}`}>
                            {msg.type === 'bot' && <span className="message-avatar">🤖</span>}
                            <div className="message-content">
                                {msg.text.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < msg.text.split('\n').length - 1 && <br />}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="chat-message bot">
                            <span className="message-avatar">🤖</span>
                            <div className="message-content typing">
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions */}
                {showSuggestions && (
                    <div className="chatbot-suggestions">
                        {suggestedQuestions.map((q, i) => (
                            <button
                                key={i}
                                className="suggestion-btn"
                                onClick={() => handleSend(q)}
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <div className="chatbot-input">
                    <input
                        type="text"
                        placeholder="Ask about Argha..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="send-btn"
                        onClick={() => handleSend()}
                        disabled={!inputValue.trim()}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
