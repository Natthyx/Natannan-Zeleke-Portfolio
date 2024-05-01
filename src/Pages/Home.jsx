import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import MySocials from '../Components/MySocials';
import { IoMdArrowDown } from "react-icons/io";
import resumePdf from '../NatannanZelekeResume.pdf'

import greetings from '../greeting.json';

function Home() {
    const [randomGreeting, setRandomGreeting] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const languages = Object.keys(greetings.greetings);
            const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
            const greeting = greetings.greetings[randomLanguage];
            setRandomGreeting(greeting);
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);

    const handleDownloadResume = () => {
        window.open(resumePdf); // Open the resume PDF in a new tab for download
    };
    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <div id='home' className='intro-container'>
                <h6>{randomGreeting}, I am </h6>
                <h1>Natannan Zeleke.</h1>
                <h2><span>&gt;</span> Fullstack Developer <span>|</span> Graphics Designer</h2>
                <p>I&apos;m a software engineer with a passion for turning ideas into elegant solutions. With expertise in both front-end finesse, back-end mastery, and a flair for graphic design, I bring innovation to life, <span>one line of code and pixel at a time.</span>.</p>
                <button onClick={handleDownloadResume}>Download Resume -&gt;</button>
            </div>
            <MySocials />
            <button onClick={handleScrollDown} className='scroll-down'><IoMdArrowDown /></button>
        </>
    );
}

export default Home;
