import ContactForm from "../Components/ContactForm"

function ContactMe(){
    return (
        <>
        <div id="contacts" className="contact-me">
        <h2>Contact</h2>
        <h4>Have a project in mind or need assistance with your next big idea? </h4>
        <h5>Let&apos;s connect and bring it to life!</h5>
        <div className="intro">Send Me A Message</div>
        <ContactForm />
        </div>
        

        </>
    )
}


export default ContactMe