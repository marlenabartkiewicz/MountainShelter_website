import dataFile from './data/shelters.json'

import { useState, useEffect } from 'react'
import firebase from './firebase'

function DataUploader() {
    const [dataUploaded, setDataUploaded] = useState([])

    const addDataToDB = (data) => {
        data.forEach(([shelterID, shelterData], index) => {
            firebase.addSingleShelter(shelterID, shelterData)
            console.log(index, shelterID, shelterData)
            setDataUploaded(dataUploaded => [...dataUploaded,
            {
                index: index,
                shelterID: shelterID,
                shelterData: shelterData
            }])
        })
    }

    const getJSONData = () => {
        return Object.entries(JSON.parse(JSON.stringify(dataFile)))
    }

    useEffect(() => {
        addDataToDB(getJSONData())
    }, [])

    return (
        <>
            {dataUploaded.map((data) => (
                <ul key={data.index} className="list-unstyled">
                    <li>[{data.index}] {data.shelterID}</li>
                    <ul>
                        {Object.entries(data.shelterData).map(([key, value]) => (
                            <li key={key}>
                                {key} : {String(value)}
                            </li>
                        ))}
                    </ul>
                </ul>
            ))}
        </>
    )
}

export default DataUploader
