import {Link} from "react-router-dom";
import logo from '../assets/logo.png'

function Navigation() {

    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light header">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="25" height="25" style={{marginRight: '8px'}}/>
                        Oceń-schronisko.pl
                    </Link>

                        <ul className="navbar-nav">
                            <li className="nav__element">
                                <Link to="/about" className="nav-link nav__link">O serwisie</Link></li>
                            <li className="nav__element">
                                <Link to="/shelters" className="nav-link nav__link">Schroniska</Link>
                            </li>
                            <li className="nav__element">
                                <Link to="/contact" className="nav-link nav__link">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}


export default Navigation;