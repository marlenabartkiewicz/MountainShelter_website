import {Link} from "react-router-dom";

function About() {


    return (
        <>
            <div className="h-100 justify-content-center align-items-center">
                <h2 id="about">O serwisie</h2>
                <p>Strona służy do oceny ogólnej schronisk w Tatrach Polskich. Możesz wystawić ocenę numeryczną
                    -
                    automatycznie wyciągniemy z tego średnią.</p>
                <p>Zachęcamy też do oceny tekstowej - komentarze mogą pomóc przyszłym turystom!</p>
                <Link to="/contact">
                    <button className="btn btn-primary text-white">
                        Skontaktuj się z nami
                    </button>
                </Link>
            </div>
        </>
    );
}

export default About;
