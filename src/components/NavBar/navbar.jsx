import { useState, useEffect, useCallback } from "react";

export const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    const items = [
        {
            'id': 1,
            'title': 'Inicio',
            'link': '/'
        },
        {
            'id': 2,
            'title': 'Sobre mi',
            'link': '/sobre-mi'
        },
        {
            'id': 3,
            'title': 'Productos',
            'link': '/productos'
        },
        {
            'id': 4,
            'title': 'Libro',
            'link': '/libro'
        },
        {
            'id': 5,
            'title': 'Redes',
            'link' : '/redes'
        }
    ]
    
    const handleScroll = useCallback (() => {
        const currentPosition = window.pageYOffset;
        setShowNavbar(scrollPosition > currentPosition || currentPosition < 500);
        setScrollPosition(currentPosition);
    }, [scrollPosition]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const navbarClass = `navbar ${showNavbar ? 'navbar-inicial' : 'navbar-scroll'}`;

    return(
        <nav className={navbarClass}>
            <a href="/">
             <img src="logo" alt="logo" className="navbar-logo"/>
            </a>
            <button className="navbar-toggle" onClick={() => setMenuActive(!menuActive)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
            {items.map(({id, title, link}) => (
                <li key={id}>
                    <a href={link} className="navbar-menu-items">{title}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
}