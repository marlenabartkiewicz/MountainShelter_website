import ContactForm from "../components/ContactForm.jsx";
import mail from "../assets/mail.png";
import telephone from "../assets/telephone.png";


function ContactPage() {
    return (
        <>
            <section className="container d-flex">
                <div className="row col pt-10">
                    <h2>Masz uwagi do działania strony?</h2>
                    <h3 style={{color: "#50854e"}}>Skontaktuj się z nami</h3>
                    <p>
                        <img src={mail} alt="" width="17" height="17" style={{marginRight: '8px'}}/>
                        info@schronisko.pl
                    </p>
                    <p>
                        <img src={telephone} alt="" width="16" height="16" style={{marginRight: '8px'}}/>
                        123 456 789
                    </p>
                </div>
                <div className="row col">
                    <ContactForm/>
                </div>
            </section>
        </>
    )
}

export default ContactPage;