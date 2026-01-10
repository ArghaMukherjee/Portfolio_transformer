import { useScrollReveal } from '../hooks/useAnimations';

function AnimatedSection({ children, className = '', animation = 'reveal' }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
}

export default AnimatedSection;
