import React, {Fragment} from "react";
import Card from './Card'; 
import MoviePoster from './MoviePoster';
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
            <button className="button slide__btn-list" onClick={() => addMovie(film)}><FiPlus/></button>
            <button className="button slide__btn-play"><FaEye/></button>
        </div>
         {/* <MoviePoster poster={poster_path}/> */}
       {/* <Card title={Title} genre={Genre} plot={Plot}/>  */}
    </Fragment>
  );
};

export default Movie;


