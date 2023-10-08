import {Link} from "react-router-dom";
import logo from '../assets/logo.png'


function Navigation() {
    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="25" height="25"  style={{ marginRight: '8px' }} />
                        Oceń-schronisko.pl
                    </Link>
                    <ul className="header__nav">
                        <li className="nav__element"><Link to="/about" className="nav__link">O serwisie</Link></li>
                        <li className="nav__element"><Link to="/shelters" className="nav__link">Schroniska</Link></li>
                        <li className="nav__element"><Link to="/shelters" className="nav__link">Oceń schronisko</Link>
                        </li>
                        <li className="nav__element"><Link to="/contact" className="nav__link">Kontakt</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}


export default Navigation;