import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AIDemos from '../components/AIDemos';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TransformerBackground from '../components/TransformerBackground';
import CustomCursor from '../components/CustomCursor';
import './DemosPage.css';

function DemosPage() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Handle hash navigation to specific demo
        if (location.hash) {
            const demoId = location.hash.replace('#', '');
            // Dispatch custom event for AIDemos to handle
            window.dispatchEvent(new CustomEvent('selectDemo', { detail: { demoId } }));
        }
    }, [location.hash]);

    return (
        <div className="demos-page">
            <CustomCursor />
            <TransformerBackground />
            <Navbar />

            <main className="demos-main">
                {/* Back to Home Link */}
                <div className="demos-nav">
                    <Link to="/" className="back-home-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Portfolio</span>
                    </Link>
                </div>

                {/* AI Demos Section */}
                <AIDemos />
            </main>

            <Footer />
        </div>
    );
}

export default DemosPage;
