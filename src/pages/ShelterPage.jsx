import {useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import firebase from "../firebase/firebase";
import Comments from "../components/Comments.jsx";
import ShelterCardRank from "../components/ShelterCardRank.jsx";


function ShelterPage() {
    const {shelterID} = useParams()
    const [shelterData, setShelterData] = useState({});
    const navigate = useNavigate();

    const getSingleShelterData = async () => {
        const shelterData = await firebase.getSingleShelterData(shelterID)
        setShelterData(shelterData)
    }

    useEffect(() => {
        getSingleShelterData();
    }, [])

    return (
        <>
            <section className="px-4 py-2">
                <div className="row px-3">
                    <div className="col-5 border rounded py-3">
                        <h2 className="text-primary">{shelterData.fullName}</h2>
                        <h4 className="text-heading-line">{shelterData.location}</h4>
                        <h6>{shelterData.website}</h6>
                        <h6>{shelterData.email}</h6>
                        <h6>{shelterData.phones}</h6>
                        <h6>Ilość miejsc noclegowych: {shelterData.capacity}</h6>
                        <p className="text-desc">{shelterData.description}</p>
                    </div>
                    <div className="col-7 d-flex justify-content-center">
                        {/*<Rank shelterID={shelterID}/>*/}
                        <ShelterCardRank shelterID={shelterID} shelterData={shelterData}/>
                    </div>
                </div>
                <Comments shelterID={shelterID}/>
                <button className="btn btn-primary text-white" type="submit" onClick={() => navigate(-1)}>Wstecz
                </button>
            </section>
        </>
    )
}

export default ShelterPage