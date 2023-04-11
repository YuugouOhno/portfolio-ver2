import AnimatedComponent from '@/components/animation/AppearanceContainer';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProjectCard = ({ title, children }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const styles = {
        flipCard: {
            width: '24rem',
            height: '13.5rem',
            perspective: '1000px',
            transition: 'transform 0.6s',
            textAlign: 'center',
        },
        flippedCard: {
            position: 'fixed',
            top: "50%",
            left: "50%",
            width: '80%',
            height: '70%',
            transform: "translateX(-50%) translateY(-44%)",
            perspective: '1000px',
            transition: 'transform 0.6s',
            textAlign: 'center',
            zIndex: "100"
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
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            textAlign: 'center',
            backgroundColor: 'red',
            borderRadius: "0.375rem",
        },
        overwrap: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "10",
            backgroundColor: 'rgba(255,255,255,0.7)',
        }
    }

    const flipCard = () => {
        setIsFlipped(!isFlipped)
    };

    return (
        <AnimatedComponent>
            <div className="cursor-pointer group flex flex-col justify-center items-center">
                {isFlipped ? <div style={styles.overwrap} onClick={flipCard}></div> : ""}
                <div style={isFlipped ? styles.flippedCard : styles.flipCard}>
                    <div style={isFlipped ? styles.flippedCardInner : styles.flipCardInner} >
                        <div style={styles.flipCardFront} onClick={flipCard}>
                            <div className="relative overflow-hidden transition-all hover:scale-105 flex justify-center items-center">
                                {children[0]}
                            </div>
                        </div>
                        <div style={styles.flipCardBack}><XMarkIcon className="h-16 w-16 top-3 left-3 fixed" onClick={flipCard} />
                            
                            {children[1]}
                        </div>
                    </div>
                </div>

                <h2 className="mt-2 text-xl text-center font-semibold tracking-normal text-brand-primary my-4">
                    <span
                        className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
                                bg-[length:0px_10px]
                                bg-left-bottom
                                bg-no-repeat
                                transition-[background-size]
                                duration-500
                                hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                        {title}
                    </span>
                </h2>
            </div>
        </AnimatedComponent>
    );
}

export default ProjectCard