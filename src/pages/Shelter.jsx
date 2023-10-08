import { useParams } from "react-router-dom"

function Shelter() {
    const { id } = useParams()
    return (
        <>
            <h1>
                Shelter: {id}
            </h1>
        </>
    )
}

export default Shelter