import Image from "next/image";

import ProjectLists from "@/components/projectSection/ProjectLists";
import FlipCardAndTitle from "@/components/elements/FlipCardAndTitle";
import Slide from "@/components/projectSection/Slide";
import Tags from "@/components/elements/Tags";

import { useContext } from 'react';
import { BoidsContext } from '@/contexts/BoidsContext';

const Project = () => {
    const { showBoids } = useContext(BoidsContext);
    return (
        <section id="project" className={`${showBoids?"opacity-50 dark:opacity-50":"opacity-100 dark:opacity-100" } transition-opacity duration-1000 ease-in-out pt-20 w-screen flex flex-col justify-center items-center  text-black bg-white dark:text-white dark:bg-black z-40 relative`}>
            <h2 className="text-5xl font-bold text-center mb-5">Project</h2>
            <p className="text-xl font-bold text-center mb-10">今までに作ってきた作品たちです。クリックで詳細が確認できます。</p>
            <div className="w-4/5 md:w-4/5">
                <div className="grid gap-10 lg:gap-10 md:grid-cols-2 flex flex-col justify-center items-start">
                    {ProjectLists.map(project => (
                        <div key={project.id} className="flex flex-col justify-center w-full shadow-lg dark:shadow dark:shadow-white rounded p-3">
                            <FlipCardAndTitle title={project.title}>
                                <div className="w-full">
                                <Image
                                    src={`/projects/${project.id}/1.png`}
                                    className="transition-all rounded-md"
                                    alt="project image"
                                    width={16000}
                                    height={9000}
                                />
                                </div>
                                <Slide path={`/projects/${project.id}/`} slides_num={project.slides_num} links={project.links} demo={project.demo}/>
                            </FlipCardAndTitle>
                            <div className="px-10">
                            {project.tags.map((tag, index)=>(
                                <Tags key={index} tag={tag.content} color={tag.color} />
                            ))}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;