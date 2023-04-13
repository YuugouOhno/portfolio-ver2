import AboutMe from "@/components/aboutSection/AboutMe.js"
import Skill from "@/components/aboutSection/Skill.js"
import History from "@/components/aboutSection/History.js"
import Tabs from "@/components/elements/Tabs"

const About = () => {
    return (
        <section id="about" className="pt-20 w-screen flex flex-col items-center text-black bg-white dark:text-white dark:bg-black">
            <Tabs keys={["ABOUT", "SKILL", "HISTORY"]}>
                <AboutMe />
                <Skill />
                <History />
            </Tabs>
        </section>
    );
}

export default About;

