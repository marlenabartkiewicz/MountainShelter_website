import {useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import firebase from "../firebase/firebase";
import NotFoundPage from "./Error/NotFoundPage.jsx";
import Rank from "../components/Rank.jsx";

function ShelterPage() {
    const { shelterID } = useParams()
    const [shelterData, setShelterData] = useState([])

    const fetchPost = () => {
        firebase.getSingleShelter(shelterID).then((result) => setShelterData(result))
        console.log(shelterData)
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const navigate = useNavigate();


    return (
        <>
            <h1>
                {shelterData["fullName"]}
            </h1>
            Pełna nazwa: {shelterData ? shelterData["fullName"] : <NotFoundPage/>}
            Ilość miejsc: {shelterData ? shelterData["capacity"]: ""}
            <Rank shelterID={shelterID}/>
            <button className="btn btn-primary" type="submit" onClick={() => navigate(-1)}>Wstecz</button>
        </>
    )
}

export default ShelterPage