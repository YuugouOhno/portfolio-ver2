import Image from "next/legacy/image";

import ProjectLists from "@/components/projectSection/ProjectLists";
import ProjectCard from "@/components/projectSection/ProjectCard";
import Tags from "@/components/elements/Tags";


const Project = () => {
    return (
        <div id="project" className="pt-20 w-screen flex flex-col justify-center items-center  text-black bg-white dark:text-white dark:bg-black">
            <h1>Project</h1>
            <p>This is the Project page</p>
            <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                <div className="grid gap-10 lg:gap-10 md:grid-cols-2 flex flex-col justify-center items-start">
                    {ProjectLists.map(project => (
                        <div key={project.id} className="flex flex-col justify-center">
                            <ProjectCard title={project.title}>
                                <Image
                                    src={project.image_path}
                                    className="transition-all rounded-md p-auto"
                                    alt="project image"
                                    width="368"
                                    height="207"
                                    layout="fixed"
                                />
                                <div>test</div>
                            </ProjectCard>
                            <Tags tags={project.tags} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;