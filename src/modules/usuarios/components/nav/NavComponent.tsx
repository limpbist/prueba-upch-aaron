import './NavComponent.css'
function NavComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="#">
            <img
              src="https://logo.clearbit.com/clearbit.com"
              alt="Logo de la empresa"
              className="d-inline-block align-text-top"
              height="30"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#news">
                  Noticias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavComponent;
