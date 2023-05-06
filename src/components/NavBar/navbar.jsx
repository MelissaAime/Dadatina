export const Navbar = () => {

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
            <ul className="navbar">
            {items.map(({id, title, link}) => (
                <li key={id}>
                    <a href={link} className="navbar-items">{title}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
}