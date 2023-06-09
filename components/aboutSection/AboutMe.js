import Image from "next/legacy/image";

import AnimatedComponent from '@/components/animation/AppearanceContainer';
// import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';

const AboutMe = () => {
    const { theme } = useTheme();
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
                            <br />早稲田大学創造理工学部環境資源工学科4年、伊坪研究室でLCA(ライフサイクルアセスメント)の研究をしています。
                            2024年4月からwebエンジニアになる予定です。
                            <br />現在は「大学生のうちにいっぱいハッカソンに出る」を目標にweb開発や統計の勉強(研究室)をしています。
                            <br />趣味は旅行、ジャグリング、ベース、ギターです。あと、人と喋るのが好きです。
                        </p>
                            {/* <GitHubCalendar username="YuugouOhno" colorScheme={theme} theme={{
                                light: ['#dcdcdc', '#8a2be2'],
                                dark: ['#696969', '#cc00ff'],
                            }} hideColorLegend={true} hideMonthLabels={true} /> */}
                    </div>

                </div>
            </AnimatedComponent>
        </div>
    )
}

export default AboutMe;