import AboutMe from "@/components/aboutSection/AboutMe.js"
import Skill from "@/components/aboutSection/Skill.js"
import History from "@/components/aboutSection/History.js"
import Tabs from "@/components/elements/Tabs"

const About = () => {
    return (
        <section id="about" className="pt-20 w-screen flex flex-col items-center text-black bg-white dark:text-white dark:bg-black z-30 relative pointer-events-auto">
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

