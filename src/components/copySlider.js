import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import {apiKey_OMDB} from '../utilities/hooks/utils'
import {apiKey_TMDB} from '../utilities/hooks/utils'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = () => {
  
  const [itemsNowPlaying, setItemsNowPlaying ] = useState([])
  

    
    const getData = async () => {
      const films = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey_TMDB}`
        );
        return films
        
        const filmsOMDB = films.data.results.map(async (item) => {
        
          const omdbFilm = await axios.get(
            `https://api.themoviedb.org/3/movie/${item.id}?api_key=${apiKey_TMDB}`
            );
            return omdbFilm;
          });
          
          let filmsFiltred = await Promise.all(filmsOMDB).then((values) => values);
          
          const finalData = filmsFiltred.map(  
            async (item) => {
              await axios.get(
                `http://www.omdbapi.com/?i=${item.data.imdb_id}&apikey=${apiKey_OMDB}`
                )
                await Promise.all(finalData).then((values) => setItemsNowPlaying(values));
              });
    }
            
  const swiperSlidesNP = itemsNowPlaying.map((item) => (
    <SwiperSlide>
      <Movie {...{ item: item.data }} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={48}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {swiperSlidesNP}
    </Swiper>
  );
};

export default Slider;