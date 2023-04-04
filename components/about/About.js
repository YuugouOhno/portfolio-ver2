import AnimatedComponent from '@/components/animation/AppearanceContainer';
import SkillBar from "./SkillBar.js"
import Tabs from "@/components/Tabs"

const About = () => {
    return (
        <div id="about" className="pt-20 h-screen w-screen flex flex-col items-center">
            <Tabs keys={["ABOUT", "SKILL", "HISTORY"]}>
                <div>
                    <AnimatedComponent>
                        <h2>大野優剛です。</h2>
                        <p>早稲田大学創造理工学部環境資源工学科4年、伊坪研究室でLCAの研究をしています。</p>
                        <p>2024年4月からチームラボという会社のエンジニアになります。</p>
                    </AnimatedComponent>
                </div>
                <div>
                    <SkillBar label="HTML" percentage={90} />
                    <SkillBar label="CSS" percentage={85} />
                    <SkillBar label="JavaScript" percentage={80} />
                </div>
                <div>
                    <AnimatedComponent>
                        <h1>Hello, world!</h1>
                    </AnimatedComponent>
                </div>
            </Tabs>
        </div>
    );
}

export default About;

