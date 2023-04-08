import Image from "next/legacy/image";

import AnimatedComponent from '@/components/animation/AppearanceContainer';

const AboutMe = () => {
    return (
        <div id="skill" className="w-full flex flex-col justify-center items-center">
            <AnimatedComponent>
                <div className="md:flex">
                    <div className="container flex justify-center items-center mb-4">
                        <Image
                            className="rounded-full"
                            src="/about/icon.png"
                            width={250}
                            height={250}
                            alt="icon"
                        />
                    </div>
                    <div className="container md:mx-10 flex flex-col items-center">
                        <p className="text-left"> 始めまして大野優剛(おおのゆうごう)です。
                            <br />早稲田大学創造理工学部環境資源工学科4年、伊坪研究室でLCAの研究をしています。
                            2024年4月からチームラボという会社でwebエンジニアをします。
                            <br />趣味は旅行、ジャグリング、ベース、ギターです。あと、人と喋るのが好きです。
                        </p>
                    </div>
                </div>
            </AnimatedComponent>
        </div>
    )
}

export default AboutMe;