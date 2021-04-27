import { Fragment, useState, useEffect } from "react";
import {apiKey_TMDB, movieInfo} from './../utilities/hooks/utils';
import { FaFilm } from "react-icons/fa";

export function MoviePage({film}){

    // const [movieSelected, setMovieSelected] = useState([])

    // useEffect(()=>{
    //     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey_TMDB}`)
    //         .then(response => response.json())
    //         .then(movieSelected => {
    //             //console.log(movieSelected.results)
    //             setMovieSelected(movieSelected.results)
    //         })
    // }, [])

    // const clickedMovie = movieSelected.filter((movie) => {
    //     console.log(movie)
    //     //movie.id === movie.id
    // })

    return(
        <div className="movie-page">
            {movieInfo ? (
                <Fragment>
                <div className="movie-column-left">
                </div>

                <div className="movie-column-right">
                    <h2>{film.original_title}</h2>

                    <div className="movie-details__rating">
                        <span className="movie-details__icon">
                            <i className="fas fa-star"></i>
                        </span>
                        <span className="movie-details__points">7.7</span>
                        <p className="movie-details__genre">Crime, Drama, Romance, Thriller</p>
                    </div>

                    <p className="movie-details__plot">
                        A dangerously charming, intensely obsessive young man goes to
                        extreme measures to insert himself into the lives of those he is
                        transfixed by.
                    </p>

                    <div className="movie-box-btn">
                        <button className="button button--big button--blue" type="button">
                            <i className="far fa-play-circle"></i>Watch trailer
                        </button>
                        <button
                            className="button button--big button--offline"
                            type="button">
                                <i className="fas fa-plus"></i>Watchlist
                        </button>
                    </div>

                    <div className="movie-box-description">
                        <p>Reparto</p>
                        <p>Genre</p>
                        <p>Lenguaje</p>
                        <p>Released</p>
                    </div>
                </div>
            </Fragment>
            ):
            (
                <p>Page not Found</p>
            )
            }
            
        
        </div>
        
    )
}