function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <span className="logo-text">AM</span>
                            <span className="logo-dot"></span>
                        </a>
                        <p>Building intelligent solutions for tomorrow's challenges.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Argha Mukherjee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
