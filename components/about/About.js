import AnimatedComponent from '../AnimatedComponent';
import SkillBar from "./SkillBar.js"
import React from "react";
import Link from 'next/link';

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="container px-8 py-5">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <Link
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-purple-600"
                                        : "text-purple-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                About
                            </Link>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <Link
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-purple-600"
                                        : "text-purple-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Skill
                            </Link>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <Link
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-purple-600"
                                        : "text-purple-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                History
                            </Link>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <h2>大野優剛です。</h2>
                                    <p>早稲田大学創造理工学部環境資源工学科4年、伊坪研究室でLCAの研究をしています。</p>
                                    <p>2024年4月からチームラボという会社のエンジニアになります。</p>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <SkillBar label="HTML" percentage={90} />
                                    <SkillBar label="CSS" percentage={85} />
                                    <SkillBar label="JavaScript" percentage={80} />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <AnimatedComponent>
                                        <h1>Hello, world!</h1>
                                    </AnimatedComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const About = () => {
    return (
        <div id="about" className="pt-20 h-screen w-screen flex flex-col items-center">
            <Tabs />
        </div>
    );
}

export default About;

