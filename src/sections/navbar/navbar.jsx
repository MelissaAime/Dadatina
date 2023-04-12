export const Navbar = () => {

    const items = [
        {
            'id': 1,
            'title': 'Inicio',
        },
        {
            'id': 2,
            'title': 'Sobre mi',
        },
        {
            'id': 3,
            'title': 'Productos',
        },
        {
            'id': 4,
            'title': 'Libro',
        },
        {
            'id': 5,
            'title': 'Redes',
        }
    ]

    return(
        <nav>
            <img src="logo" alt="logo" className="navbar-logo"/>
            <ul className="navbar">
            {items.map(({id, title}) => (
                <li key={id}>
                    <a href="!#" className="navbar-items">{title}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
}