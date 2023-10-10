import {useState} from "react";


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const mailformat = 'ppp';


    function validateForm() {
        if (name.length === 0) {
            alert('Uzupełnij pole "Imię"')
        }
        if (message.length === 0) {
            alert('Dodaj wiadomość')
        }
    }

    // function validateEmail(e) {
    //     if (e.value(mailformat) === false) {
    //         alert('Podaj poprawny adres email')
    //     }
    // }

    return (
        <>
            <form className="container">
                <h2 className="row">Kontakt</h2>
                <div className="row d-flex">
                    <div className="col">
                        <label className="row form-label">Imię </label>
                        <input className="row p-1" type="text" value={name} placeholder="Imię"
                               onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="row form-label">Adres E-mail </label>
                        <input className="row p-1" type="text" placeholder="Twój adres e-mail" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center pr-10">
                    <textarea className="row mt-5" value={message} placeholder="Wiadomość"
                      onChange={e => setMessage(e.target.value)}/>
                    <button className="row col-2 mt-2 btn btn-primary" type="submit"
                            onClick={validateForm}>Wyślij
                    </button>
                </div>

            </form>
        </>
    );

}


export default ContactForm;
