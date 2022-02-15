import Cart from './CartWidget';

function Nav (){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Glops!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Bebidas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Combos</a>
                    </li>
                </ul>
                </div>
            </div>
            <Cart/>
        </nav>
    )
}

export default Nav