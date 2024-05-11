import { FaGithub, FaTelegram, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';



function MySocials(){
    return (
        <>
            <div className="my-socials">
                <ul>
                    <li><a href='https://github.com/Natthyx'><FaGithub /></a></li>
                    <li><a href='https://www.linkedin.com/in/natannan-zeleke/'><FaLinkedin /></a></li>
                    <li><a href='https://www.instagram.com/_opixanax'><FaInstagram /></a></li>
                    <li><a href='https://t.me/Opixanax'><FaTelegram /></a></li>
                    <li><a href='+251973073279'><FaPhone /></a></li>
                </ul>
            </div>
        </>
    )
}

export default MySocials