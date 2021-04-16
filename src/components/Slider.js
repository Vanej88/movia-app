import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import {apiKey_OMDB} from '../utilities/hooks/utils';
import {apiKey_TMDB} from '../utilities/hooks/utils';
import {addMovie, read, write} from './../utilities/hooks/utils';
import {SlideWatchlist} from './WatchList'



export function Slider(){

  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey_TMDB}`)
      .then(response => response.json())
      .then(films => {
        //console.log(films.results)
        setFilms(films.results)
      })
  }, [])

    const slideComponents = films.map((film) => 
      <SwiperSlide className='slide'>
        <SlideWatchlist/>
        <Movie film={{...film}}/>
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