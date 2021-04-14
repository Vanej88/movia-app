import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import {apiKey_OMDB} from '../utilities/hooks/utils';
import {apiKey_TMDB} from '../utilities/hooks/utils';
import {addMovie} from './../utilities/hooks/utils';
import {FiPlus} from "react-icons/fi";
import {FaEye} from 'react-icons/fa'; 


export function Slider(){

  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey_TMDB}`)
      .then(response => response.json())
      .then(films => {
        console.log(films.results)
        setFilms(films.results)
      })
  }, [])

    const slideComponents = films.map((film, index) =>
      <SwiperSlide className='slide' index={films.index}>
        <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" className="slide__img"></img>
        <div className="slide__overlay">
            <button className="button slide__btn-list" onClick={addMovie}><FiPlus/></button>
            <button className="button slide__btn-play"><FaEye/></button>
        </div>
      </SwiperSlide>
    )

  return(
      <section className="slide-watchlist">
        <h2>Last Movies</h2>
        <Swiper
          spaceBetween={2}
          slidesPerView={5}
          slidesPerGroup={4}
          Navigation
        >
          {slideComponents}

        </Swiper>
      </section>
  )
}