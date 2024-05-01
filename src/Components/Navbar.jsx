import { useRef } from "react";
// import { FaBars } from "react-icons/fa";

function Navbar(){
    const navRef = useRef();

    // const showNavBar=()=>{
    //     navRef.current.classList.toggle("responsive_nav");
    // }
    return(
        <>
        <div className="navbar-container">
            <div className="navbar-row">
                <div className="logo-container">
                    <a href="#home"><img src="../MyLogo.png" alt="my-logo"></img></a>
                </div>
                <div ref={navRef} className="nav-list-container">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                {/* <button className="nav-btn" onClick={showNavBar}>
                <FaBars className="nav-btn"/>
                </button> */}
            </div>
            
        </div>
        
        </>
    )
}

export default Navbar;