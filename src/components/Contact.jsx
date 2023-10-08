import {useState} from "react";

const Contact = () => {
    const [name, setName] = useState("Nieznajomy");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <div className="Contact">
                <h2 id="contact">Kontakt</h2>
                <label>Imię </label>
                <input type="text" value={name} placeholder="Imię" onChange={e => setName(e.target.value)}/>
                <label>Adres E-mail </label>
                <input type="text" placeholder="Twój adres e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <label>Wiadomość </label>
                <textarea value={message} placeholder="Wiadomość"onChange={e => setMessage(e.target.value)}/><br/>
                <button type="submit">Wyślij</button>
                {/*<h3 style={{color:"red"}}>Witaj {name} Twoja opinia jest dla nas ważna!</h3>*/}
            </div>
        </>
    );
}


export default Contact;
