import React from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { useState, useEffect } from 'react'
import { FaRegPlayCircle, FaMinus } from "react-icons/fa";
import {read,removeMovie} from './../utilities/hooks/utils'

SwiperCore.use([Navigation]);

export function SlideWatchlist() {

    const [watchlist, setWatchlist] = useState(read("watchlist-data") || [])

    useEffect(() => {
        let timeout = setTimeout(() => {
            setWatchlist(read("watchlist-data") || [])
        }, 200)
        return () => clearTimeout(timeout)
    }, [watchlist])


    const slideComponents = watchlist.map((f, index) =>
        <SwiperSlide className="slide"  index={f.index}>
            <img src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`} alt="" className="slide__img"/>
            <div className="slide__overlay">
                <div className="slide__buttons">
                   <button className="slide__button-play"><FaRegPlayCircle/></button>
                   <button className="slide__button-list"><FaMinus onClick={() => removeMovie(f)}/></button>
                </div>
            </div>
        </SwiperSlide>
    )



    // https://api.themoviedb.org/3/movie/now_playing?api_key=13f55cdc863fb7b55567782f8e38ded4

    return (
            watchlist.length !== 0 && (
                <section className="slide-last-movies">
                    <h2>Watchlist</h2>
                    <Swiper
                        spaceBetween={32}
                        slidesPerView={6.5}
                        slidesPerGroup={4}
                        navigation
                    >
                        {slideComponents}

                    </Swiper>
                </section>
            )
            
    )
}
