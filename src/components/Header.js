import imagenes from "../images/imagenes";
import {useState, useEffect} from 'react'
import{apiKey_TMDB} from './../utilities/hooks/utils'
import { searchMovie } from "../utilities/hooks/utils";


export function Header() {

    const [search, setSearch] = useState('')
    const [value, setValue] = useState('')
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey_TMDB}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0].title)})
    }, [])

    const btnBuscar = ev => {
        if(ev){
            setSearch(<input type="text" placeholder="títulos, películas, personajes" class="input imput--search" value={value}/>)
        }
    }


    return (
      <div>
          <div className="container-header" >
  
              <div className="header-box-logo">
                  <span className="logo__image">Movia</span>
              </div>
  
              <nav className="header-nav">
                  <ul className="nav__menu">
                  <li className="nav__menu-item">
                      <a className="nav__menu-link">Series</a>
                  </li>
                  <li className="nav__menu-item">
                      <a className="nav__menu-link">Películas</a>
                  </li>
                  <li className="nav__menu-item">
                      <a className="nav__menu-link">Watchlist</a>
                  </li>
                  </ul>
              </nav>
  
              <div className="header-box-options">
                  {search}
                  <button className="options__buscador" onClick={btnBuscar}>
                      <i className="fas fa-search"></i>
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
  