import Image from "next/image";

import ProjectLists from "@/components/projectSection/ProjectLists";
import ProjectCard from "@/components/projectSection/ProjectCard";
import Slide from "@/components/projectSection/Slide";
import Tags from "@/components/elements/Tags";


const Project = () => {
    return (
        <section id="project" className="pt-20 w-screen flex flex-col justify-center items-center  text-black bg-white dark:text-white dark:bg-black">
            <h1>Project</h1>
            <p>This is the Project page</p>
            <div className="w-4/5 md:w-4/5">
                <div className="grid gap-10 lg:gap-10 md:grid-cols-2 flex flex-col justify-center items-start">
                    {ProjectLists.map(project => (
                        <div key={project.id} className="flex flex-col justify-center w-full">
                            <ProjectCard title={project.title}>
                                <div className="w-full">
                                <Image
                                    src={project.image_path}
                                    className="transition-all rounded-md"
                                    alt="project image"
                                    width="16000"
                                    height="9000"
                                    layout="intrinsic"
                                />
                                </div>
                                <Slide/>
                            </ProjectCard>
                            <Tags tags={project.tags} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;