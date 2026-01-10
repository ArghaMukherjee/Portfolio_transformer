import { useScrollProgress } from '../hooks/useAnimations';

function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

export default ScrollProgress;
