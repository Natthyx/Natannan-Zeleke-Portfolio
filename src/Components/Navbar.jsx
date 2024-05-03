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
                    <a href="#home"><img src="../MyLogo.png" alt="my-logo"></img></a>
                </div>
                <div ref={navRef} className="nav-list-container">
                    <ul>
                        <li><a onClick={() => handleScroll('about')} href="#about">About</a></li>
                        <li><a onClick={() => handleScroll('projects')}>Projects</a></li>
                        <li><a onClick={() => handleScroll('award')}>Achievements</a></li>
                        <li><a onClick={() => handleScroll('contact')}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
