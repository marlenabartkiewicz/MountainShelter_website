import {doc, getDoc} from "firebase/firestore";

function About() {



    return (
        <>
            <div className="about-container">
                <div className="header-container__text-wrapper">
                    <div className="header-container__text d-flex flex-column justify-content-center align-items-center">
                        <h2 id="about">O serwisie</h2>
                        <p>Strona służy do oceny ogólnej schronisk w Tatrach Polskich. Możesz wystawić ocenę numeryczną
                            -
                            automatycznie wyciągniemy z tego średnią.</p>
                        <p>Zachęcamy też do oceny tekstowej - komentarze mogą pomóc przyszłym turystom!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
