import SkillBar from "@/components/aboutSection/SkillBar.js"

const Skill = () => {
    return (
        <div id="skill" className="w-full flex flex-col justify-center items-center">

                    <SkillBar label="HTML" percentage={90} />
                    <SkillBar label="CSS" percentage={85} />
                    <SkillBar label="JavaScript" percentage={80} />
                    <SkillBar label="Python" percentage={80} />

                    <SkillBar label="Laravel" percentage={90} />
                    <SkillBar label="React" percentage={85} />
                    <SkillBar label="Next" percentage={80} />

                    <SkillBar label="github" percentage={90} />
                    <SkillBar label="CSS" percentage={85} />
                    <SkillBar label="JavaScript" percentage={80} />

        </div>
    )
}

export default Skill;