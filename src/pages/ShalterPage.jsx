import { useParams } from "react-router-dom"
import {useEffect, useState} from "react";
import firebase from "../firebase/firebase";
import NotFoundPage from "./Error/NotFoundPage.jsx";

function ShalterPage() {
    const { id } = useParams()

    const [shelterData, setShelterData] = useState([])

    const fetchPost = () => {
        firebase.getSingleShelter(id).then((result) => setShelterData(result), console.log('ERROR'))
        console.log(shelterData)
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <>
            <h1>
                Shelter: {id}
            </h1>
            Pełna nazwa: {shelterData ? shelterData["fullName"] : <NotFoundPage/>}
            Ilość miejsc: {shelterData ? shelterData["capacity"]: ""}
        </>
    )
}

export default ShalterPage