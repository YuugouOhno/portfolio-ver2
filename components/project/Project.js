import Image from "next/legacy/image";
import ProjectLists from "./ProjectLists";
import ImageAndTitle from "@/components/animation/ImageAndTitle";
import Tags from "@/components/Tags";

const Project = () => {
    return (
        <div id="project" className="pt-20 w-screen flex flex-col justify-center items-center">
            <h1>Project</h1>
            <p>This is the Project page</p>
            <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
                    {ProjectLists.map(project => (
                        <div key={project.id}>
                            <ImageAndTitle title={project.title} url={project.url}>
                                <Image
                                    src={project.image_path}
                                    height="180"
                                    width="320"
                                    className="transition-all"
                                    alt="project image"
                                    layout="responsive"
                                />
                            </ImageAndTitle>
                            <Tags tags={project.tags} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;