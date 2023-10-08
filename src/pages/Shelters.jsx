import {Link} from 'react-router-dom'

function Shelters() {
    return (
        <>
            <h1>
                Shelters Subpage
            </h1>
            <nav>
                <ul>
                    <li><Link to="/shelters/morskie-oko">Schronisko Morskie Oko</Link></li>
                    <li><Link to="/shelters/murowaniec">Schronisko Murowaniec</Link></li>
                    <li><Link to="/shelters/hala-gasienicowa">Schronisko na Hali Gasienicowej</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Shelters