import { Fragment, useState, useEffect } from "react";
import { apiKey_TMDB, movieInfo } from "./../utilities/hooks/utils";

export function MoviePage(id, film) {
  const [target, setTarget] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=${apiKey_TMDB}`)
      .then((response) => response.json())
      .then((film) => {
        console.log(film); 
        setTarget(film);
      });
  }, []);

  return (
    <div className="movie-page">
      {target ? (
        <Fragment>

          <div className="movie-column-left">
            <img src={`https://image.tmdb.org/t/p/w500/${target.poster_path}`} />
          </div>

          <div className="movie-column-right">

            <div className="movie__title">     
              <h2 className="movie__title-name">
                {target.title}
              </h2>
            </div>

            <div className="movie__rating">
              <span className="movie__rating-icon">
                <i className="fas fa-star"></i>
              </span>
              <span className="movie__rating-points">
                {target.vote_average}
              </span>
            </div>

            <div className="movie__text">
              <p className="movie__text-plot">
                {target.overview}
              </p>
            </div>

            <div className="movie-box-btn">

              <button className="button button--big button--blue" type="button">
                <i className="btn-icon far fa-play-circle"></i>Watch trailer
              </button>

              <button className="button button--big button--offline"
                type="button">
                <i className="btn-icon fas fa-plus"></i>Watchlist
              </button>
            </div>

            <div className="movie__details">

              <div className="movie__details-box">
                <p className="movie__details-runtime">
                  Runtime:
                <span className="movie__details-span">
                   {target.runtime} minutes
                </span>
                </p>
              </div>

              <div className="movie__details-box">
                <p className="movie__details-genres">
                  Genres: 
                  {target.genres && target.genres.map((item) => 
                    <span className="movie__details-span">{item.name}</span>
                  )}
                </p>  
              </div>

              <div className="movie__details-box">
                <p className="movie__details-languages">
                  Languages:
                  {target.spoken_languages && target.spoken_languages.map((item) =>
                    <span className="movie__details-span">{item.english_name}</span>
                  )}
                </p>
              </div>

              <div className="movie__details-box">
                <p className="movie__details-date">
                  Date of Release:
                  <span className="movie__details-span">{
                    target.release_date}
                  </span>
                </p>
              </div>

            </div>

          </div>

        </Fragment>
      ) : (
        <p>Page not Found</p>
      )}
    </div>
  );
}
