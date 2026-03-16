import { useState, useEffect } from 'react';
import profilePhoto from '../assets/profile-photo.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#education', label: 'Education' },
        { href: '#projects', label: 'Projects' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#contact', label: 'Contact' },
        { href: '#newsletter', label: 'Newsletter' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img 
                        src={profilePhoto} 
                        alt="Profile Diagram" 
                        style={{ 
                            width: '45px', 
                            height: '45px', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            border: '2px solid var(--accent)',
                            boxShadow: '0 0 10px rgba(var(--accent-rgb), 0.3)'
                        }} 
                    />
                </a>
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <button
                    className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
