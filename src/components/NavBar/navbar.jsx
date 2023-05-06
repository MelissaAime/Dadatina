import { useState } from "react";

export const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);
    const items = [
        {
            'id': 1,
            'title': 'Inicio',
            'link': '/'
        },
        {
            'id': 2,
            'title': 'Sobre mi',
            'link': '/sobremi'
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

    return(
        <nav>
            <img src="logo" alt="logo" className="navbar-logo"/>
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