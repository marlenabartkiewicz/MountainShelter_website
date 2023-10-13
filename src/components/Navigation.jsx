import {Link} from "react-router-dom";
import {useState} from "react";
import logo from '../assets/logo.png'


function Navigation() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light header">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="25" height="25" style={{marginRight: '8px'}}/>
                        Oceń-schronisko.pl
                    </Link>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 header__nav">
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
                </div>
            </nav>
        </>
    )
}


export default Navigation;