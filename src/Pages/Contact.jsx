
const Contact = () => {
    return (  
        <>

 <form className="form-container"action={"https://formspree.io/f/xanayvok"} method="POST">
    <p className="form-title">Neem contact op</p>
    <hr />
    <p className="form-title2">Ik reageer graag!</p>
    <input className="form-email" type="email" name='email' placeholder={"E-mail"} required /><br />
    <input className="form-subject" type="text" name='subject'placeholder={"Onderwerp"} required /><br />
    <input className="form-message" type="text" name='message'placeholder={"Bericht"} required/><br />
    <input className="form-button" type="submit" value={"Verzenden"} />
    </form>       
        </>
    );
}
 
export default Contact;