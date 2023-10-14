import {Route, Routes} from 'react-router-dom'

import RootLayout from "./layouts/RootLayout.jsx";
import SheltersPage from "./pages/SheltersPage.jsx";
import NotFoundPage from "./pages/Error/NotFoundPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ShelterPage from "./pages/ShelterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";


const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/shelters">
                        <Route index element={<SheltersPage/>}/>
                        <Route path=":shelterID" element={<ShelterPage/>}/>
                    </Route>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
