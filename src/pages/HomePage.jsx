import {Link} from "react-router-dom";

function HomePage() {
    return (
        <>
            <div className="header-container">
                <div className="header-container__text-wrapper">
                    <div className="header-container__text d-flex flex-column justify-content-center align-items-center">
                        <h3> Schroniska w Tatrach Polskich </h3>
                        <Link to="/shelters">
                            <button className="btn btn-primary text-white">
                                Sprawdź i oceń
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;