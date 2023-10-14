import { Outlet } from 'react-router-dom';

import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

function RootLayout() {
    return (
        <>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="h-100 d-flex flex-column gx-0 overflow-auto">
                        <div className="row">
                            <header>
                                <Navigation />
                            </header>
                        </div>

                        <div className="row flex-grow-1 bg-light p-0">
                            <main>
                                <div className="container bg-white bg-light h-100 p-0">
                                    <Outlet />
                                </div>
                            </main>
                        </div>

                        <div className="row">
                            <header>
                                <Footer/>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RootLayout