import {useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import firebase from "../firebase/firebase";
import NotFoundPage from "./Error/NotFoundPage.jsx";
import Rank from "../components/Rank.jsx";
import Comments from "../components/Comments.jsx";

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
            <h1>
                {shelterData["fullName"]}
            </h1>
            Pełna nazwa: {shelterData ? shelterData.fullName : <NotFoundPage/>}
            Ilość miejsc: {shelterData ? shelterData.capacity: ""}
            <Rank shelterID={shelterID}/>
            <Comments shelterID={shelterID}/>
            <button className="btn btn-primary text-white" type="submit" onClick={() => navigate(-1)}>Wstecz</button>
        </>
    )
}

export default ShelterPage