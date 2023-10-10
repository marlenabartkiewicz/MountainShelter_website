import ContactForm from "../components/ContactForm.jsx";

function ContactPage() {
    return (
        <>
            <section className="container d-flex">
                <div className="row col pt-10">
                    <h2>Masz uwagi do działania strony?</h2>
                    <h3 style={{color: "#50854e"}}>Skontaktuj się z nami</h3>
                    <p>info@schronisko.pl</p>
                    <p>123 456 789</p>
                </div>
                <div className="row col">
                    <ContactForm/>
                </div>
            </section>
        </>
    )
}

export default ContactPage;