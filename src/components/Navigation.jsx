function Navigation() {
    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <a href="#" className="logo">Oceń_schronisko.pl</a>
                    <ul className="header__nav">
                        <li className="nav__element"><a href="#about" className="nav__link">O serwisie</a></li>
                        <li className="nav__element"><a href="#shelters" className="nav__link">Schroniska</a></li>
                        <li className="nav__element"><a href="#" className="nav__link">Oceń schronisko</a>
                        </li>
                        <li className="nav__element"><a href="#contact" className="nav__link">Kontakt</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}


export default Navigation;