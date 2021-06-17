import { Fragment, useState, useEffect } from "react";
import { apiKey_TMDB, movieInfo } from "./../utilities/hooks/utils";
import { FaFilm } from "react-icons/fa";

export function MoviePage(id, film) {
  const [target, setTarget] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=${apiKey_TMDB}`)
      .then((response) => response.json())
      .then((film) => {
        console.log(film)
        setTarget(film);
      });
  }, []);

  const { poster_path, title, genres, status, tagline } = target;

  // const genresNames = genres.filter((item) => {
  //   console.log(item.name)
  // })

  //console.log(genresNames)

  return (
    <div className="movie-page">
      {movieInfo ? (
        <Fragment>
          <div className="movie-column-left">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
          </div>

          <div className="movie-column-right">
            <h2>{title}</h2>
            <div className="movie-details__rating">
              <span className="movie-details__icon">
                <i className="fas fa-star"></i>
              </span>
              <span className="movie-details__points">7.7</span>
              <p className="movie-details__genre">
                {}
              </p>
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
                type="button"
              >
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
      ) : (
        <p>Page not Found</p>
      )}
    </div>
  );
}
