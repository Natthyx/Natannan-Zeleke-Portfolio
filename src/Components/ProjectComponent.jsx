/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";


function ProjectComponent(props){
    return (
        <a href={props.link} target="blank">
        <div className="projects-row">
        {props.type === "mobile" ? <div className="mobileImg-holder">
        <img src={props.image} alt="projectDemo"></img>
        </div> :
            <div className="projectImg-holder">
            <img src={props.image} alt="projectDemo"></img>
            </div>}
            <div className="project-detail">
                <h3>#{props.id}</h3>
                <h1>{props.title}</h1>
                <div className="desc">
                    <p>{props.description}</p>
                    <ul className="tech-stack">
                    {props.techStack.map((tech,index) =>(
                        <li key={index}>{tech}</li>
                    ))}
                        
                    </ul>
                </div>    
        </div>
        <div className="preview">
        <a href={props.github} target="blank"><FaGithub /></a> 
                </div>
            </div>
            
        
        </a>
)}


export default ProjectComponent