import ProjectComponent from "../Components/ProjectComponent";
import projects from "../projects";

function Projects(){
    return (
        <>
        <div id="projects" className="projects-container">
        <h2>Projects</h2>
        {projects.map((project,index) =>(
            <ProjectComponent
                key={index}
                id ={project.id}
                title={project.title}
                description={project.desc}
                image={project.image}
                link={project.link}
                github={project.github}
                techStack={project.techstack}
                type={project.type}
            />
        ))}
        <div className="projectbtn">
        <button className="more-projectBtn"><a href="https://github.com/Natthyx?tab=repositories" target="blank">Check out More Projects</a></button>
        </div>
        
        </div>
        </>
    )
}

export default Projects