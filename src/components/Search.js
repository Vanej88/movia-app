import {useState, useEffect, Fragment} from 'react';
import{apiKey_TMDB} from './../utilities/hooks/utils';


export function PageResults({query}){

    const [movies, setMovies] = useState([])

    useEffect(() =>{

        const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey_TMDB}`;

        fetch(api_url)
            .then(response => response.json())
            .then(movies => {
                //console.log(movies.results)
               setMovies(movies.results) 
            })
    }, [])

    const matchMovies = movies.filter((item) => item.original_title.toLowerCase().includes(query.toLowerCase()))
    //console.log(matchMovies)
    const movieTitles = matchMovies.map((film)=> 
        <li className="movie__list">
            <h2 className="movie__title">{film.original_title}</h2>
        </li>
    );

    return(
        <div>
            {movieTitles ? (
                <ul className="movie__menu">
                    {movieTitles}
                </ul>
            ): (
                <div className="non-found">
                <p className="non-found-msg">No hay resultados para esta búsqueda</p>    
            </div>
            )
        }

        </div>
    )

    }         