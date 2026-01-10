import { useEffect } from 'react';

function CredentialModal({ isOpen, imageSrc, title, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="credential-modal active">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h3 className="modal-title">{title}</h3>
                <div className="modal-image-container">
                    <img src={imageSrc} alt={title} />
                </div>
            </div>
        </div>
    );
}

export default CredentialModal;
