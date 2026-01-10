import { useEffect, useState } from 'react';

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.matches('a, button, .project-card, .edu-card, .cert-card, .testimonial-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
                style={{ left: position.x, top: position.y }}
            />
            <div
                className={`cursor-follower ${isHovering ? 'hovering' : ''}`}
                style={{ left: position.x, top: position.y }}
            />
        </>
    );
}

export default CustomCursor;
