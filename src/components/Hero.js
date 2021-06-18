export function Hero() {
    return (
      <section className="movie">
        <div className="container-choice">
          <div className="movie-details">
            <h2 className="movie-details__title">You</h2>
  
            <div className="movie-details__rating">
              <span className="movie-details__icon">
                <i className="fas fa-star"></i>
              </span>
              <span className="movie-details__points">7.7</span>
              <p className="movie-details__genre">
                Crime, Drama, Romance, Thriller
              </p>
            </div>
  
            <p className="movie-details__plot">
              A dangerously charming, intensely obsessive young man goes to
              extreme measures to insert himself into the lives of those he is
              transfixed by.
            </p>
  
            <div className="movie-details__choice-btn">
              <button className="button button--big button--blue" type="button">
                <i className="btn-icon far fa-play-circle"></i>Watch trailer
              </button>
              <button
                className="button button--big button--offline"
                type="button"
              >
                <i className="btn-icon fas fa-plus"></i>Watchlist
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }