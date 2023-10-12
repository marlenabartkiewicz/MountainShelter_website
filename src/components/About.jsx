import DataUploader from "../firebase/DataUploader.jsx";

function About() {
    return (
        <>
            <div style={{backgroundColor: "#bce3dc", padding: "10px", margin: "20px"}}>
                <h2 id="about">O serwisie</h2>
                <p>Strona służy do oceny ogólnej schronisk w Tatrach Polskich. Możesz wystawić ocenę numeryczną -
                    automatycznie wyciągniemy z tego średnią.</p>
                <p>Zachęcamy też do oceny tekstowej - komentarze mogą pomóc przyszłym turystom!</p>
                <DataUploader />
            </div>
        </>
    );
}

export default About;
