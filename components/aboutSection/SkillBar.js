import { useState, useEffect, useRef } from 'react';

const SkillBar = ({ label, percentage, color = "bg-green-500" }) => {
    const [barWidth, setBarWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const skillBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (skillBarRef.current) {
            observer.observe(skillBarRef.current);
        }

        return () => {
            if (skillBarRef.current) {
                observer.unobserve(skillBarRef.current);
            }
        };
    }, [skillBarRef]);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                setBarWidth(percentage);
            }, 100);
        }
    }, [isVisible, percentage]);

    return (
        <div className="w-full md:flex md:my-2" ref={skillBarRef}>
            <div className="flex w-36">
                <span>{label}</span>
            </div>
            <div className="w-full my-1 h-4 bg-gray-300 rounded">
                <div
                    className={color + " h-full rounded transition-all duration-1000"}
                    style={{ width: `${barWidth}%` }}
                ></div>
            </div>
        </div>
    );
}

export default SkillBar