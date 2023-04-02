const ProjectContainer = ({children}) => {
    return (
        <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
                {children}
            </div>
        </div>
    )
}

export default ProjectContainer