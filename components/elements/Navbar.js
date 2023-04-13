import Link from 'next/link';
import DarkModeToggle from '@/components/elements/DarkModeToggle';
import AddFish from '@/components/elements/AddFish';
import LanguageToggle from '@/components/elements/LanguageToggle';
import Brackets from '@/components/elements/Brackets';
import { FaHamburger } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.pageYOffset;
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id)
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    return (
        <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="hidden md:flex p-3">
                    YuugouOhno
                </div>
                <div className="flex md:hidden p-3">
                    <FaHamburger className="h-6 w-6" onClick={() => setIsOpen(!isOpen)} />
                    <div className={isOpen ? "fixed top-0 left-0 bold font-medium text-7xl mt-20 w-auto p-4" : 'hidden'}>
                        <ul className="flex flex-col">
                            <li className="dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-70 rounded-lg my-1">
                                <Link href="#home" className={activeSection == 'home' ? 'text-purple-600' : ''}>Home</Link>
                            </li>
                            <li className="dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-70 rounded-lg my-1">
                                <Link href="#about" className={activeSection == 'about' ? 'text-purple-600' : ''}>About</Link>
                            </li>
                            <li className="dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-70 rounded-lg my-1">
                                <Link href="#project" className={activeSection == 'project' ? 'text-purple-600' : ''}>Project</Link>
                            </li>
                            <li className="dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-70 rounded-lg my-1">
                                <Link href="#contact" className={activeSection == 'contact' ? 'text-purple-600' : ''}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="items-center justify-center hidden w-full md:flex md:w-auto">
                    <ul className="flex p-3 font-medium rounded-lg space-x-8">
                        <li><Brackets isSelected={activeSection == 'home' ? true : false}>
                            <Link href="#home" className={activeSection == 'home' ? 'text-purple-600' : ''}>Home</Link>
                        </Brackets></li>
                        <li><Brackets isSelected={activeSection == 'about' ? true : false}>
                            <Link href="#about" className={activeSection == 'about' ? 'text-purple-600' : ''}>About</Link>
                        </Brackets></li>
                        <li><Brackets isSelected={activeSection == 'project' ? true : false}>
                            <Link href="#project" className={activeSection == 'project' ? 'text-purple-600' : ''}>Project</Link>
                        </Brackets></li>
                        <li><Brackets isSelected={activeSection == 'contact' ? true : false}>
                            <Link href="#contact" className={activeSection == 'contact' ? 'text-purple-600' : ''}>Contact</Link>
                        </Brackets></li>

                    </ul>
                </div>
                <div className="flex">
                    <DarkModeToggle />
                    <AddFish />
                    <LanguageToggle />
                </div>
            </div>
        </nav >
    )
}

export default Navbar;