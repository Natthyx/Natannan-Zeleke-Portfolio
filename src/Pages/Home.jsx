import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import MySocials from '../Components/MySocials';
import { IoMdArrowDown } from "react-icons/io";
import resumePdf from '../NatannanZelekeResume.pdf'

import greetings from '../greeting.json';

function Home() {
    const [randomGreeting, setRandomGreeting] = useState("");
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const textToType = "Fullstack Developer | Graphics Designer";

    useEffect(() => {
        const interval = setInterval(() => {
            const languages = Object.keys(greetings.greetings);
            const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
            const greeting = greetings.greetings[randomLanguage];
            setRandomGreeting(greeting);
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        if (currentIndex < textToType.length) {
            const timer = setTimeout(() => {
                setTypedText((prevTypedText) => prevTypedText + textToType[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 100); 
            return () => clearTimeout(timer);
        }
    }, [currentIndex, textToType])    ;

    const handleDownloadResume = () => {
        window.open(resumePdf);
    };

    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id='home'>
            <Navbar />
            <div className='intro-container'>
                <h6>{randomGreeting}, I am </h6>
                <h1>Natannan Zeleke.</h1>
                <h2><span>&gt;</span> {typedText}</h2>
                <p>I&apos;m a software engineer with a passion for turning ideas into elegant solutions. With expertise in both front-end finesse, back-end mastery, and a flair for graphic design, I bring innovation to life, <span>one line of code and pixel at a time.</span>.</p>
                <button onClick={handleDownloadResume}>Download Resume -&gt;</button>
            </div>
            <MySocials />
            <button className='scroll-down' onClick={handleScrollDown}><IoMdArrowDown /></button>
        </div>
    );
}

export default Home;
