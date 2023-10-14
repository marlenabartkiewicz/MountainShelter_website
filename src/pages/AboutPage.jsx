import {Link} from "react-router-dom";

function AboutPage() {
    return (
        <>
            <div className="d-flex flex-column h-100">
                <div className="bg-about d-flex flex-fill bg-gradient p-3 justify-content-center align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3 className="pb-3 text-about-header text-shadow-custom">OCEŃ TATRZAŃSKIE SCHRONISKA</h3>
                        <p>Strona służy do oceny ogólnej schronisk w Tatrach Polskich. Możesz wystawić ocenę numeryczną
                            - automatycznie wyciągniemy z tego średnią.</p>
                        <p>Zachęcamy też do oceny tekstowej - komentarze mogą pomóc przyszłym turystom!</p>
                        <Link to="/shelters">
                            <button className="btn btn-primary text-white">
                                Schroniska
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="d-flex bg-light text-dark py-2 px-3 justify-content-center align-items-center">
                    <div className="d-flex w-75 justify-content-center  align-items-center">
                        <div className="pe-4">Masz uwagi do działania strony - skontaktuj się z nami!</div>
                        <Link to="/contact">
                            <button className="btn btn-primary text-white">
                                Kontakt
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutPage;