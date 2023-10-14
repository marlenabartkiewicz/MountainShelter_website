import Rank from "./Rank.jsx";

function ShelterCardRank({shelterID, shelterData}) {
    return (
        <section>
            <div className="card">
                <div className="overflow-hidden object-fit-cover rounded">
                    <img src={shelterData.imageURL} className="card-img-top" alt="..."/>
                </div>
                <div className="card-img-overlay">
                    <div className="d-flex justify-content-left">
                        <Rank shelterID={shelterID}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShelterCardRank;

