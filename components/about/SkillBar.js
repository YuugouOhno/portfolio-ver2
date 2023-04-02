import { useState, useEffect } from 'react';

const SkillBar = ({ label, percentage }) => {
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setBarWidth(percentage);
        }, 100);
    }, [percentage]);

    return (
        <div className="w-full">
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