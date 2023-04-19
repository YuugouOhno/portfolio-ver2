import SkillBar from "@/components/aboutSection/SkillBar.js"

const Skill = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <p>言語</p>
            <SkillBar label="HTML" percentage={60} color="bg-green-500" />
            <SkillBar label="CSS" percentage={60} color="bg-green-500" />
            <SkillBar label="JavaScript" percentage={70} color="bg-green-500" />
            <SkillBar label="Python" percentage={50} color="bg-green-500" />
            <SkillBar label="PHP" percentage={60} color="bg-green-500" />
            <p>ライブラリ</p>
            <SkillBar label="Three.js" percentage={65} color="bg-orange-500" />
            <p>フレームワーク</p>
            <SkillBar label="Laravel" percentage={70} color="bg-pink-500" />
            <SkillBar label="React.js" percentage={60} color="bg-pink-500" />
            <SkillBar label="Next.js" percentage={65} color="bg-pink-500" />
            <SkillBar label="Tailwind.css" percentage={70} color="bg-pink-500" />
            <p>ツール</p>
            <SkillBar label="github" percentage={70} color="bg-blue-500" />
            <SkillBar label="Docker" percentage={30} color="bg-blue-500" />
            <p>ジャグリング</p>
            <SkillBar label="Cigar Box" percentage={100} color="bg-yellow-500" />
            <SkillBar label="Ball" percentage={90} color="bg-yellow-500" />
            <SkillBar label="Diavolo" percentage={85} color="bg-yellow-500" />
            <SkillBar label="Poi" percentage={80} color="bg-yellow-500" />
            
        </div>
    )
}

export default Skill;