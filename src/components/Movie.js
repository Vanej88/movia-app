import React, {Fragment} from "react";
import Card from './Card'; 
import MoviePoster from './MoviePoster';

const Movie = ({ item }) => {
  console.log(item);
  const { Poster, Title, Genre, Plot } = item;
  return (
    <Fragment>
        <MoviePoster poster={Poster}/>
        <Card title={Title} genre={Genre} plot={Plot}/> 
    </Fragment>
  );
};

export default Movie;


