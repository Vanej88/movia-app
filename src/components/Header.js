import imagenes from "../images/imagenes";

export function Header({sendQuery, query}) {

    const inputHandler = ev => sendQuery(ev.target.value); 

    return (
      <div>
          <div className="container-header" >
  
              <div className="header-box-logo">
                  <span className="logo__image">Movia</span>
              </div>
  
              <nav className="header-nav">
                  <ul className="nav__menu">
                  <li className="nav__menu-item">
                      <a className="nav__menu-link">Now Playing</a>
                  </li>
                  <li className="nav__menu-item">
                      <a className="nav__menu-link">Popular</a>
                  </li>
                  <li className="nav__menu-item">
                      <a className="nav__menu-link">Top Rated</a>
                  </li>
                  </ul>
              </nav>
  
              <div className="header-box-options">
                <input type="text" placeholder="títulos, películas, personajes" className="input input--search" value={query} onChange={inputHandler}/>
                <button className="options__buscador">
                    <i className="btn-icon fas fa-search"></i>
                </button>
                <button className="options__profile" />
                <img
                      className="options__profile-img"
                      src={imagenes.logo}
                      alt="profile-logo"/>
              </div>
          </div>
      </div>
      
    );
}