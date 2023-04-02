import ProjectCard from "./ProjectCard";
import ProjectLists from "./ProjectLists";

const Project = () => {
    return (
        <div id="project" className="pt-20 w-screen flex flex-col justify-center items-center">
            <h1>Project</h1>
            <p>This is the Project page</p>
            <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
                    {ProjectLists.map(project => (
                        <ProjectCard key={project.id} image={project.image_path} title={project.title} tags={project.tags} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;