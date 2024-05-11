import { useState } from 'react'
import{ useRef } from 'react';
import emailjs from '@emailjs/browser';


  

  

function ContactForm(){
  const [message,setMessage] = useState(
    {
      fullname: "",
      email: "",
      message: ""
    }
  );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zsx04kj', 'template_gzlptnk', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  function handleOnChange(event){
    const {name , value} = event.target
    setMessage(prevValue => {
      return {
              ...prevValue, [name]:value
          }
      })
  }
  return(
    <>
    <div className='contact-container'>
      <form ref={form}>
      <div className='row'>
      <div className='name-container'>
        <div><label className='name'>Your Name: </label></div>
        <input className='nameInput' type='text' name='fullname' onChange={handleOnChange} value={message.fullname} placeholder='Enter Your Full Name...'></input>
        </div>
        <div className='email-container'>
        <div><label className='email'>Email Address: </label></div>
        <input className='emailInput' type='email' name='email' onChange={handleOnChange} value={message.email} placeholder='Enter Your Email...'></input>
        </div>
        </div>
        <div className='subject-container'>
        <div><label className='subject'>Subject: </label></div>
        <input className='subjectInput' type='text' name='subject' onChange={handleOnChange} value={message.subject} placeholder='Enter Your Subject...'></input>
        </div>
        <div className='message-container'>
        <div><label className='message'>Message: </label></div>
        <div><textarea className='messageInput' name='message' onChange={handleOnChange} value={message.message} placeholder='Type your message...'></textarea></div>
        </div>
        <div className='sendBtn'>
        <button type='submit' onClick={sendEmail}>Send Me</button></div>
      </form>
      </div>
    </>

  )
}

export default ContactForm