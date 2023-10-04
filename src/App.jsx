import Navigation from "./components/Navigation.jsx";
import Opening from "./components/Opening.jsx";
import About from "./components/About.jsx";
import Shelters from "./components/Shelters.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";



function App() {

    return (
        <>
            <div className="container">
                <Navigation/>
                <Opening/>
                <About/>
                <Shelters/>
                <Contact/>
                <Footer/>
            </div>

        </>
    )
}

export default App
