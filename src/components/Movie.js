import React, {Fragment} from "react";
import {A} from 'hookrouter'; 
import {addMovie, movieInfo} from './../utilities/hooks/utils'
import {FiPlus} from "react-icons/fi";
import {FaRegPlayCircle} from 'react-icons/fa'; 
import { MoviePage } from "./MoviePage";


const Movie = ({ film }) => {
  //console.log({film});
  //const { poster_path, title, genre, Plot } = film;
  return (
    <Fragment>
      <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" className="slide__img"></img>
        <div className="slide__overlay">
            <div className="slide__box-btns">
              <button className="slide__btn slide__btn--add" onClick={() => addMovie(film)}><FiPlus/></button>
              <button className="button slide__button-play" onClick={() => movieInfo(film)}><FaRegPlayCircle/></button>
              {/* <A href={`${film.original_title}`}><button className="slide__btn slide__btn--play" onClick={() => 
              <MoviePage/>}
            ><FaRegPlayCircle/></button></A> */}
            </div>
        </div>
    </Fragment>
  );
};

export default Movie;


