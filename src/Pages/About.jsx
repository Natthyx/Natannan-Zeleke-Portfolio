import skills from "../skills"

function About(){
    return(
        <>
        <div id="about" className="about-container">
        <div className="aboutme-row">
        <div className="aboutme-text">
                <h2>About Me</h2>
                <p>My name is Natannan Zeleke and I speialized in web development that utilize <span>HTML</span>, <span>CSS</span>, <span>JS</span>, <span>REACT</span> and etc.<br></br>
                    I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works.
                    Striving to never stop learning and improving.<br></br>
                    When I&apos;m not coding, I am <span>working on my graphics desgining</span>, reading, or picking up some new hands-on art project like <span>drawing</span>.<br></br>
                 </p>
                <span className="skill-title">My skills:</span>
                <ul className="skill-list">
                {skills.map(s =>(
                    <li key={s.id}>{s.skill}</li>
                ))}
                </ul>
            </div>
            <div className="img-holder">
                <img src="src\assets\myPic.png" alt="my-picture"></img>
            </div>
            
        </div>
        </div>
            
        </>
    )
}

export default About