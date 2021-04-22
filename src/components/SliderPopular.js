import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import {apiKey_TMDB} from '../utilities/hooks/utils';

export function SliderPopular(){

  const [popular, setPopular] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey_TMDB}`)
      .then(response => response.json())
      .then(popular => {
        //console.log(popular.results)
        setPopular(popular.results)
      })
  }, [])

    const slideComponents = popular.map((film) => 
    <SwiperSlide className='slide'>
        <Movie film={{...film}}/>
      </SwiperSlide>
    )
    
    return( 
      <section className="section-slide">
        <h2>Popular</h2>
        <Swiper
          spaceBetween={32}
          slidesPerView={5.5}
          slidesPerGroup={4}
          Navigation
          >
          
          {slideComponents}

        </Swiper>
      </section>
  )
}
