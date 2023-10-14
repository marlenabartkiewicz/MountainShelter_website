import {Link} from "react-router-dom";

function ShelterCard({shelterID, shelterData}) {
    return (
        <>
            <section className="shelter-container">
                <div className="col">
                    <div className="card h-100">
                        <div className="image-box rounded position-relative">
                            <img src={shelterData.imageURL} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{shelterData.fullName}</h5>
                            <p className="card-text"> {shelterData.location} </p>
                            <div className="d-flex justify-content-center">
                                <Link to={`/shelters/${shelterID}`}>
                                    <button type="submit" className="btn btn-primary text-white">
                                        Oceń schronisko
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ShelterCard;

