import {Route, Routes} from 'react-router-dom'

import RootLayout from "./layouts/RootLayout.jsx";


import SheltersPage from "./pages/SheltersPage.jsx";
import NotFoundPage from "./pages/Error/NotFoundPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ShalterPage from "./pages/ShalterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./components/About.jsx";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/shelters">
                        <Route index element={<SheltersPage/>}/>
                        <Route path=":id" element={<ShalterPage/>}/>
                    </Route>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </>
    )
}

export default App
