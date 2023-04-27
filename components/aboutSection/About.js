import AboutMe from "@/components/aboutSection/AboutMe.js"
import Skill from "@/components/aboutSection/Skill.js"
import History from "@/components/aboutSection/History.js"
import Tabs from "@/components/elements/Tabs"

import { useContext } from 'react';
import { BoidsContext } from '@/contexts/BoidsContext';

const About = () => {
    const { showBoids } = useContext(BoidsContext);
    return (
        <section id="about" className={`${showBoids?"opacity-50 dark:opacity-50":"opacity-100 dark:opacity-100" } transition-opacity duration-1000 ease-in-out pt-20 w-screen flex flex-col items-center text-black bg-white dark:text-white dark:bg-black z-30 relative pointer-events-auto`}>
            <h2 className="text-5xl font-bold text-center">About</h2>
            <Tabs keys={["ME", "SKILL", "HISTORY"]}>
                <AboutMe />
                <Skill />
                <History />
            </Tabs>
        </section>
    );
}

export default About;

