import {Outlet} from 'react-router-dom'


import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

function RootLayout() {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default RootLayout