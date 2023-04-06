import Image from "next/legacy/image";
import AnimatedComponent from '@/components/animation/AppearanceContainer';
import Skill from "@/components/aboutSection/Skill.js"
import History from "@/components/aboutSection/History.js"
import Tabs from "@/components/Tabs"

const About = () => {
    return (
        <div id="about" className="pt-20 w-screen flex flex-col items-center bg-black text-white">
            <Tabs keys={["ABOUT", "SKILL", "HISTORY"]}>
                <div>
                    <AnimatedComponent>
                        <Image
                            className="rounded-full"
                            src="/home/icon.png"
                            width={250}
                            height={250}
                            alt="icon"
                        />
                        <h2>大野優剛です。</h2>
                        <p>早稲田大学創造理工学部環境資源工学科4年、伊坪研究室でLCAの研究をしています。</p>
                        <p>2024年4月からチームラボという会社のエンジニアになります。</p>
                    </AnimatedComponent>
                </div>
                <Skill />
                <History />
            </Tabs>
        </div>
    );
}

export default About;

