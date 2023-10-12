import {Link} from 'react-router-dom'
import Shelter from "../components/Shelter.jsx";
import {useEffect, useState} from 'react'
import firebase from '../firebase/firebase'


const SheltersPage = () => {

    const [sheltersData, setSheltersData] = useState([]);

    useEffect(() => {
        firebase.getAllSheltersID().then(result => setSheltersData(result))
    }, [])

    return (
        <>
            <h1>
                Shelters Subpage
            </h1>
            {Object.entries(sheltersData).map(([shelterID, shelterName]) => (
                    <Link key={shelterID} to={`/shelters/${shelterID}`}><Shelter shelterName={shelterName}/></Link>
                )
            )
            }
        </>
    )
}

export default SheltersPage

