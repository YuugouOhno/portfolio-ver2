import AnimatedComponent from './AnimatedComponent';
import SkillBar from "./SkillBar.js"

const About = () => {
    return (
        <div id="about" className="h-screen w-screen flex flex-col justify-center items-center">
            <h2>大野優剛です。</h2>
            <p>早稲田大学創造理工学部環境資源工学科4年、伊坪研究室でLCAの研究をしています。</p>
            <p>2024年4月からチームラボという会社のエンジニアになります。</p>
            <SkillBar label="HTML" percentage={90} />
            <SkillBar label="CSS" percentage={85} />
            <SkillBar label="JavaScript" percentage={80} />
            <AnimatedComponent>
                <h1>Hello, world!</h1>
            </AnimatedComponent>
        </div>
    )
}

export default About;