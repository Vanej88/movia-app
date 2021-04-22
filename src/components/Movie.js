import React, {Fragment} from "react";
import {addMovie} from './../utilities/hooks/utils'
import {FiPlus} from "react-icons/fi";
import {FaEye} from 'react-icons/fa'; 


const Movie = ({ film }) => {
  //console.log({film});
  //const { poster_path, title, genre, Plot } = film;
  return (
    <Fragment>
      <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" className="slide__img"></img>
        <div className="slide__overlay">
            <div className="slide__box-btns">
              <button className="slide__btn slide__btn--add" onClick={() => addMovie(film)}><FiPlus/></button>
              <button className="slide__btn slide__btn--play"><FaEye/></button>
            </div>
        </div>
         {/* <MoviePoster poster={poster_path}/> */}
       {/* <Card title={Title} genre={Genre} plot={Plot}/>  */}
    </Fragment>
  );
};

export default Movie;


