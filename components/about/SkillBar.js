import { useState, useEffect, useRef } from 'react';

const SkillBar = ({ label, percentage }) => {
    const [barWidth, setBarWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const skillBarRef = useRef(null);

    useEffect(() => {
        console.log(1)
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
    }, []);

    useEffect(() => {
        console.log(2)
        if (isVisible) {
            setTimeout(() => {
                setBarWidth(percentage);
            }, 100);
        }
    }, [isVisible, percentage]);

    return (
        <div className="w-full" ref={skillBarRef}>
            <div className="flex justify-between mb-2">
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full h-4 bg-gray-300 rounded">
                <div
                    className="h-full bg-green-500 rounded transition-all duration-1000"
                    style={{ width: `${barWidth}%` }}
                ></div>
            </div>
        </div>
    );
}

export default SkillBar