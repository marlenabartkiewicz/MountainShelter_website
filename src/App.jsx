import {Route, Routes} from 'react-router-dom'

import RootLayout from "./layouts/RootLayout.jsx";


import Shelters from "./pages/Shelters.jsx";
import NotFound from "./pages/Error/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import Shelter from "./pages/Shelter.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/shelters">
                        <Route index element={<Shelters/>}/>
                        <Route path=":id" element={<Shelter/>}/>
                    </Route>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>

        </>
    )
}

export default App
