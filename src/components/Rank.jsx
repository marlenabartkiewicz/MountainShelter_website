import firebase from "../firebase/firebase";
import { useState, useEffect } from "react";

import user from "../assets/icon-user.png"

function Rank({ shelterID }) {
    const [currentRank, setCurrentRank] = useState(0);
    const [currentVotes, setCurrentVotes] = useState(0);
    const [starClicked, setStarClicked] = useState(false);

    useEffect(() => {
        updateRank()
    })

    const calculateAvgRank = (ranksArray) => {
        if (ranksArray.length > 0) {
            return ranksArray.reduce((a, b) => a + b, 0) / ranksArray.length
        }
        return 0
    }

    const updateRank = async () => {
        const shelterRanks = await firebase.getShelterRanks(shelterID)
        setCurrentRank(calculateAvgRank(shelterRanks))
        setCurrentVotes(shelterRanks.length)
    }

    const handleStarClick = async (event) => {
        if (!starClicked) {
            const rank = Number(event.target.getAttribute("rank"));
            await firebase.addShelterRank(shelterID, rank)
            await updateRank()
            setStarClicked(true)
        }
    }

    return (
        <>
            <div className="d-flex flex-column pb-1 pt-2 rank">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="rank__result d-flex justify-content-center align-items-center">
                        {currentRank.toFixed(2)}
                    </div>
                </div>
                <div className="rank__votes d-flex justify-content-center align-items-center">
                    <img src={user} />{currentVotes}
                </div>

                {!starClicked ?
                    <div className="d-flex d-flex justify-content-center align-items-center">
                        <div className="rank__stars">
                            <div rank={5} onClick={handleStarClick}>★</div>
                            <div rank={4} onClick={handleStarClick}>★</div>
                            <div rank={3} onClick={handleStarClick}>★</div>
                            <div rank={2} onClick={handleStarClick}>★</div>
                            <div rank={1} onClick={handleStarClick}>★</div>
                        </div>
                    </div>
                    : <div className="rank__votes d-flex justify-content-center align-items-center" >Zaglosowano</div>}
            </div>
        </>
    );
}

export default Rank;