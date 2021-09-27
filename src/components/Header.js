import { NavLink } from "react-router-dom";

const Header = ({ nombre }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">{nombre}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                        <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                        <NavLink className="nav-link" to="/acerca-de">Acerca de</NavLink>
                        <NavLink className="nav-link" to="/contacto">Contactanos</NavLink>
                        <NavLink className="nav-link" to="/personajes">Personajes</NavLink>
                        <NavLink className="nav-link" to="/DatosApi">PersonajesApi</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
// export Header;