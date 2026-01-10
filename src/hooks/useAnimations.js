import { useEffect, useRef, useState } from 'react';

// Hook for scroll-triggered animations
export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return [ref, isVisible];
}

// Hook for parallax effect
export function useParallax(speed = 0.5) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * speed);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return offset;
}

// Hook for mouse tracking (3D tilt effect)
export function useMouseTilt() {
    const ref = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            setTilt({ x: x * 20, y: y * -20 });
        };

        const handleMouseLeave = () => {
            setTilt({ x: 0, y: 0 });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return [ref, tilt];
}

// Hook for scroll progress
export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            setProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
}

// Hook for magnetic cursor effect
export function useMagnetic(strength = 0.3) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;
            setPosition({ x: deltaX, y: deltaY });
        };

        const handleMouseLeave = () => {
            setPosition({ x: 0, y: 0 });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return [ref, position];
}
