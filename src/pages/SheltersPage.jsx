import ShelterCard from "../components/ShelterCard.jsx";
import {useEffect, useState} from 'react'
import firebase from '../firebase/firebase'


const SheltersPage = () => {
    const [allSheltersData, setAllSheltersData] = useState({});

    const getAllSheltersData = async () => {
        const allSheltersData = await firebase.getAllSheltersData()
        setAllSheltersData(allSheltersData)
    }

    useEffect(() => {
        getAllSheltersData()
    }, []);

    return (
        <>
            <h2 className="text-center">Schroniska w Tatrach Polskich</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    Object.entries(allSheltersData).map(([shelterID, shelterData]) => (
                        <ShelterCard key={shelterID} shelterID={shelterID} shelterData={shelterData}/>
                    ))
                }
            </div>
        </>
    )
}

export default SheltersPage

