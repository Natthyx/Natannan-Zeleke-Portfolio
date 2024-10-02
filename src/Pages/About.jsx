import skills from "../skills"
import myPic from '../assets/myPic.png'

function About(){
    return(
        <>
        <div id="abouts" className="about-container">
        <div className="aboutme-row">
        <div className="aboutme-text">
                <h2>About Me</h2>
                <p>My name is Natannan Zeleke and I speialized in web development that utilize <span>HTML</span>, <span>CSS</span>, <span>JS</span>, <span>REACT</span> and etc.<br></br>
                    I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works.
                    Striving to never stop learning and improving.<br></br>
                    When I&apos;m not coding, I am <a href="https://www.behance.net/gallery/192771277/My-Portfolio/modules/1090496355" target="blank"><span>working on my graphics desgining</span></a>, reading, or picking up some new hands-on art project like <span>drawing</span>.<br></br>
                 </p>
                <span className="skill-title">My skills:</span>
                <ul className="skill-list">
                {skills.map(s =>(
                    <li key={s.id}>{s.skill}</li>
                ))}
                </ul>
            </div>
            <div className="img-holder">
                <img src={myPic} alt="Natannan Zeleke's picture"></img>
            </div>
            
        </div>
        </div>
            
        </>
    )
}

export default About
