import { useState } from 'react';

const FlipCard = ({ back, children }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
            <div className="flip-card-inner">
                <div className="flip-card-front">{children}</div>
                <div className="flip-card-back">{back}</div>
            </div>
        </div>
    );
}

export default FlipCard