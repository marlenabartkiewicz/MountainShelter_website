import {useState} from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function validateForm() {
        if (name.length === 0) {
            alert('Uzupełnij pole "Imię"')
        }
        if (message.length === 0) {
            alert('Dodaj wiadomość')
        }
    }

    return (
        <>
            <form className="container">
                <h2 className="row">Kontakt</h2>
                <div className="row d-flex">
                    <div className="col">
                        <label className="row form-label">Imię </label>
                        <input className="row p-1 form-control bg-light" type="text" value={name} placeholder="Imię"
                               onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="row form-label">Adres E-mail </label>
                        <input className="row p-1 form-control bg-light" type="text" placeholder="Twój adres e-mail" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center pr-10">
                    <textarea className="row mt-5 form-control bg-light" value={message} placeholder="Wiadomość"
                      onChange={e => setMessage(e.target.value)}/>
                    <button className="row col-2 mt-2 btn btn-primary text-white" type="submit"
                            onClick={validateForm}>Wyślij
                    </button>
                </div>
            </form>
        </>
    );

}

export default ContactForm;
