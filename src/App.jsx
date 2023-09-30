import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import Shelters from "./components/Shelters.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {

    return (
        <>
            <div className={"container"}>
            <Navigation/>
            <About/>
            <Shelters/>
            <Contact/>
            <Footer/>
            </div>

        </>
    )
}

export default App
