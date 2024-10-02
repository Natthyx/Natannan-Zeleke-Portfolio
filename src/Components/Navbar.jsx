import { useRef } from "react";

function Navbar(){
    const navRef = useRef();

    const handleScroll = (targetId) => {
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="navbar-container">
            <div className="navbar-row">
                <div className="logo-container">
                    <a href="#home" onClick={() => handleScroll('homes')}><img src="../MyLogo.png" alt="Natannan Zeleke's fullstack web development website logo"></img></a>
                </div>
                <div className="nav-list-container">
                    <ul ref={navRef}>
                        <li><a href="#about" onClick={() => handleScroll('abouts')}>About</a></li>
                        <li><a href="#project" onClick={() => handleScroll('projects')}>Projects</a></li>
                        {/* <li><a href="#award" onClick={() => handleScroll('awards')}>Achievements</a></li> */}
                        <li><a href="#contact" onClick={() => handleScroll('contacts')}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
