import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import {apiKey_TMDB} from '../utilities/hooks/utils';

export function SliderNowPlaying(){

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
        <Movie film={{...film}}/>
      </SwiperSlide>
    )
    
    return(
      <section className="slide">
        <h2>Now Playing</h2>
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