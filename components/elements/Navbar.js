import Link from 'next/link';
import Image from "next/legacy/image";
import DarkModeToggle from '@/components/elements/DarkModeToggle';
import AddFish from '@/components/elements/AddFish';
import LanguageToggle from '@/components/elements/LanguageToggle';
import NowWeather from '@/components/elements/NowWeather';
import Brackets from '@/components/elements/Brackets';
import { FaHamburger } from "react-icons/fa";
import { useState, useEffect, useContext } from 'react';
import { useTheme } from 'next-themes';

import { BoidsContext } from '@/contexts/BoidsContext';

import { Link as Scroll } from 'react-scroll';

const Navbar = () => {
    const { isEndOfPage, setIsEndOfPage } = useContext(BoidsContext);

    const [isOpen, setIsOpen] = useState(false);
    const [isAffix, setIsAffix] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.pageYOffset;
            // 現在表示されているセクションを判定
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id)
                    setIsEndOfPage(false)
                    if (section.id == "game" && sectionTop + sectionHeight >= scrollPosition) {
                        setIsEndOfPage(true)
                    }
                }
            });
            // 最初のふわっとするやつ
            if (scrollPosition > 50) {
                setIsAffix(true);
            } else {
                setIsAffix(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    return (
        <nav className={`z-50 fixed w-full top-0 left-0 transition-all duration-500 ease-in ${isAffix ? 'bg-gray-300 dark:bg-gray-700 p-0' : 'p-4 text-xl'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <div className="hidden md:flex px-4 text-xl">
                    <Link href="#">
                        {theme == "dark" && <Image
                            src="/yuugouohno-white.png"
                            alt="project image"
                            width={120}
                            height={60}
                            layout="fixed"
                            priority={true}
                        />}
                        {theme == "light" && <Image
                            src="/yuugouohno-black.png"
                            alt="project image"
                            width={120}
                            height={60}
                            layout="fixed"
                            priority={true}
                        />}
                    </Link>
                </div>
                <div className="flex md:hidden p-3">
                    <FaHamburger className="h-6 w-6" onClick={() => setIsOpen(!isOpen)} />
                    <div className={isOpen ? "fixed top-0 left-0 bold font-medium text-7xl mt-20 w-auto" : 'hidden'}>
                        <ul className="flex flex-col">
                            <li className="dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-70 rounded-lg my-1">
                                <Link href="#home" className={activeSection == 'home' ? 'text-purple-600 hover:text-purple-400' : ''}>Home</Link>
                            </li>
                            <li className="dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-70 rounded-lg my-1">
                                <Link href="#about" className={activeSection == 'about' ? 'text-purple-600 hover:text-purple-400' : ''}>About</Link>
                            </li>
                            <li className="dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-70 rounded-lg my-1">
                                <Link href="#project" className={activeSection == 'project' ? 'text-purple-600 hover:text-purple-400' : ''}>Project</Link>
                            </li>
                            <li className="dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-70 rounded-lg my-1">
                                <Link href="#contact" className={activeSection == 'contact' ? 'text-purple-600 hover:text-purple-400' : ''}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="items-center justify-center hidden w-full md:flex md:w-auto">
                    <ul className="flex p-3 font-medium rounded-lg space-x-8">
                        <li>
                            <Brackets isSelected={activeSection == 'home' ? true : false}>
                                <Scroll
                                    to="home"
                                    className={activeSection == 'home' ? 'text-purple-600 hover:text-purple-700 hover:cursor-pointer' : 'hover:cursor-pointer'}
                                    smooth={true}
                                    duration={800}
                                >
                                    Home
                                </Scroll>
                            </Brackets>
                        </li>
                        <li>
                            <Brackets isSelected={activeSection == 'about' ? true : false}>
                                <Scroll
                                    to="about"
                                    className={activeSection == 'about' ? 'text-purple-600 hover:text-purple-700 hover:cursor-pointer' : 'hover:cursor-pointer'}
                                    smooth={true}
                                    duration={800}
                                >
                                    About
                                </Scroll>
                            </Brackets>
                        </li>
                        <li>
                            <Brackets isSelected={activeSection == 'project' ? true : false}>
                                <Scroll
                                    to="project"
                                    className={activeSection == 'project' ? 'text-purple-600 hover:text-purple-700 hover:cursor-pointer' : 'hover:cursor-pointer'}
                                    smooth={true}
                                    duration={800}
                                >
                                    Project
                                </Scroll>
                            </Brackets>
                        </li>
                        <li>
                            <Brackets isSelected={activeSection == 'contact' ? true : false}>
                                <Scroll
                                    to="contact"
                                    className={activeSection == 'contact' ? 'text-purple-600 hover:text-purple-700 hover:cursor-pointer' : 'hover:cursor-pointer'}
                                    smooth={true}
                                    duration={800}
                                >
                                    Contact
                                </Scroll>
                            </Brackets>
                        </li>
                        <li>
                            <Brackets isSelected={activeSection == 'presntation' ? true : false}>
                                <Scroll
                                    to="presntation"
                                    className={activeSection == 'presntation' ? 'text-purple-600 hover:text-purple-700 hover:cursor-pointer' : 'hover:cursor-pointer'}
                                    smooth={true}
                                    duration={800}
                                >
                                    Presntation
                                </Scroll>
                            </Brackets>
                        </li>

                    </ul>
                </div>
                <div className="flex">
                    <DarkModeToggle />
                    <AddFish />
                    {/* <LanguageToggle /> */}
                    <NowWeather />
                </div>
            </div>
        </nav >
    )
}

export default Navbar;