import SkillBar from "@/components/aboutSection/SkillBar.js"

const Skill = () => {
    return (
        <div id="skill" className="w-full flex flex-col justify-center items-center">

                    <SkillBar label="HTML" percentage={60} color="bg-green-500" />
                    <SkillBar label="CSS" percentage={60} color="bg-green-500" />
                    <SkillBar label="JavaScript" percentage={70} color="bg-green-500" />
                    <SkillBar label="Python" percentage={50} color="bg-green-500" />
                    <SkillBar label="PHP" percentage={60} color="bg-green-500" />

                    <SkillBar label="Three.js" percentage={65} color="bg-orange-500" />
                    
                    <SkillBar label="Laravel" percentage={70} color="bg-pink-500" />
                    <SkillBar label="React.js" percentage={60} color="bg-pink-500" />
                    <SkillBar label="Next.js" percentage={65} color="bg-pink-500" />
                    <SkillBar label="Tailwind.css" percentage={70} color="bg-pink-500" />

                    <SkillBar label="github" percentage={70} color="bg-blue-500" />
                    <SkillBar label="AWS" percentage={5} color="bg-blue-500" />
                    <SkillBar label="Docker" percentage={30} color="bg-blue-500" />

        </div>
    )
}

export default Skill;