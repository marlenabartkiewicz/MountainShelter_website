import {Link} from "react-router-dom";

function HomePage() {
    return (
        <>

            <section className="w-100 h-100">
                <div className="bg-container position-relative"></div>
                <div className="text-overlay text-center text-black">
                    <h2> Schroniska w Tatrach Polskich </h2>
                    <h3>Sprawdź i oceń</h3>
                    <Link to="/shelters">
                        <button className="btn btn-primary">
                            Sprawdź
                        </button>
                    </Link>
                </div>
            </section>

        </>
    )
}

export default HomePage;