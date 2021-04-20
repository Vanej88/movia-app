import imagenes from "../images/imagenes";
import {useState, useEffect} from 'react'
import{apiKey_TMDB} from './../utilities/hooks/utils'
import { searchMovie } from "../utilities/hooks/utils";
import {Title} from './Title'


export function Header() {

    //const [dataResults, setDataResults] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    const [movieList, setMovieList] = useState('')

    const inputHandler = ev => {
        if(ev.keyCode === 13){
            
            setMovieList(ev.target.value);
            // console.log(`this is ${movieList}`)
            
            // console.log(ev.target.movieList)

            const api_url = `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey_TMDB}&query=${encodeURIComponent(ev.target.value)}`;

            //console.log("api_url", api_url);

            fetch(api_url)
                .then(response => response.json())
                .then(data => {
                    console.log(data.results)
                   setMovieList(data.results)

                })
        }
    }
    
    const moviesGrid = movieList.map((movie) => <Title title={movie.title} poster={movie.poster_path}/>)
    
    const btnBuscar = ev => {
        if(ev){
            setInputSearch(<input type="text" placeholder="títulos, películas, personajes" className="input input--search" onKeyDown={inputHandler}/>)
            
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
                  {inputSearch && moviesGrid} 
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
  