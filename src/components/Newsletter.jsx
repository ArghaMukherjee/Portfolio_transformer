import { useState } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import AnimatedSection from './AnimatedSection';

// ============================================================
// GOOGLE APPS SCRIPT CONFIGURATION
// ============================================================
// Replace this URL with your deployed Google Apps Script Web App URL
// Instructions: https://github.com/your-repo#newsletter-setup
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
// ============================================================

function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(''); // 'success', 'error', 'duplicate', ''
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('error');
            setStatusMessage('Please enter a valid email address.');
            setTimeout(() => setStatus(''), 5000);
            return;
        }

        setIsSubmitting(true);
        setStatus('');

        try {
            // Check if Google Apps Script URL is configured
            if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
                // Demo mode - simulate success for development
                console.warn('Newsletter: Google Apps Script URL not configured. Running in demo mode.');
                await new Promise(resolve => setTimeout(resolve, 1000));
                setStatus('success');
                setStatusMessage('Thanks for subscribing! Check your inbox for confirmation.');
                setEmail('');
            } else {
                // Production mode - submit to Google Apps Script
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Required for Apps Script
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email.trim().toLowerCase(),
                        source: window.location.hostname,
                        timestamp: new Date().toISOString()
                    })
                });

                // Note: With 'no-cors', we can't read the response
                // The request will succeed if the script is properly deployed
                setStatus('success');
                setStatusMessage('Thanks for subscribing! Check your inbox for confirmation.');
                setEmail('');
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setStatus('error');
            setStatusMessage('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
            // Reset status after 5 seconds
            setTimeout(() => {
                setStatus('');
                setStatusMessage('');
            }, 5000);
        }
    };

    return (
        <section className="newsletter section" id="newsletter">
            <div className="container">
                <div className="newsletter-wrapper">
                    <AnimatedSection animation="reveal-left" className="newsletter-content">
                        <span className="section-tag">Stay Updated</span>
                        <h2 className="newsletter-title">Subscribe to My Newsletter</h2>
                        <p className="newsletter-desc">
                            Get the latest insights on AI/ML, Data Science trends, and exclusive content
                            delivered straight to your inbox. No spam, unsubscribe anytime.
                        </p>
                        <div className="newsletter-features">
                            <div className="feature-item">
                                <span className="feature-icon">📚</span>
                                <span>Weekly AI insights</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🚀</span>
                                <span>Latest research updates</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">💡</span>
                                <span>Exclusive tips & tricks</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="reveal-right" className="newsletter-form-container">
                        <form onSubmit={handleSubmit} className="newsletter-form">
                            <div className="form-group">
                                <div className="input-wrapper">
                                    <span className="input-icon">✉️</span>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`subscribe-btn ${isSubmitting ? 'loading' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="loading-spinner"></span>
                                    ) : (
                                        <>
                                            <span>Subscribe</span>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>

                            {status === 'success' && (
                                <div className="form-message success">
                                    <span>🎉</span> {statusMessage}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-message error">
                                    <span>⚠️</span> {statusMessage}
                                </div>
                            )}
                        </form>

                        <p className="privacy-note">
                            🔒 Your email is safe with us. We respect your privacy.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
