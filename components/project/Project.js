import ProjectContainer from "./ProjectContainer";
import ProjectCard from "./ProjectCard";
import ProjectLists from "./ProjectLists";

const Project = () => {
    return (
        <div id="project" className="pt-20 w-screen flex flex-col justify-center items-center">
            <h1>Project</h1>
            <p>This is the Project page</p>
            <ProjectContainer>
                {ProjectLists.map(project => (
                    <ProjectCard key={project.id} image={project.image_path} title={project.title} tags={project.tags}  />
                ))}
            </ProjectContainer>
        </div>
    )
}

export default Project;