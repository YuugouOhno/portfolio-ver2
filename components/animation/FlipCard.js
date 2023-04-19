import { useState, useEffect } from 'react';

const FlipCard = ({ value, whichFlippe, setWhichFlippe, children }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    useEffect(() => {
        if (whichFlippe === value) {
            setIsFlipped(true);
        } else {
            setIsFlipped(false);
        }
    });

    const styles = {
        flipCard: {
            width: '24rem',
            height: '13rem',
            perspective: '1000px',
            transition: 'transform 0.6s',
            textAlign: 'center',
        },
        flipCardInner: {
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s',
            textAlign: 'center',
        },
        flippedCardInner: {
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s',
            transform: 'rotateY(180deg)',
            textAlign: 'center',
        },

        flipCardFront: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            textAlign: 'center',
        },
        flipCardBack: {
            position: 'absolute',
            width: '300%',
            height: '300%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            textAlign: 'center',
            backgroundColor: 'gray',
            borderRadius: "0.375rem",	
        },
    }

    const flipCard = () => {
        setWhichFlippe(value)
    };

    return (
        <div style={styles.flipCard} onClick={flipCard}>
            <div style={isFlipped ? styles.flippedCardInner : styles.flipCardInner} >
                <div style={styles.flipCardFront}>{children[0]}</div>
                <div style={styles.flipCardBack}>{children[1]}</div>
            </div>
        </div>
    );
}

export default FlipCard