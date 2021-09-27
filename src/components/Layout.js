import { personajes } from './Personajes'

const Layout = () => {
    return (
        <>
            <div className="container d-flex justify-content-between flex-wrap">
                {personajes.map((personaje, index) => (
                    <div className="card mt-3" key={index} style={{ width: '18rem' }}>
                        <img src={personaje.imagen} className="card-img-top" alt={personaje.nombre} style={{ width: '100%', height: '250px' }} />
                        <div className="card-body mt-2">
                            <h5 className="card-title text-center">{personaje.nombre}</h5>
                            <p className="card-text">{personaje.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Layout
