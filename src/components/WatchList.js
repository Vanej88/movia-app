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

    //console.log(watchlist[0])
    const slideComponents = watchlist.map((film, index) =>
        <SwiperSlide className="slide"  index={film.index}>
            <img src={`https://image.tmdb.org/t/p/w500/${film.film.poster_path}`} alt="" className="slide__img"/>
            <div className="slide__overlay">
                <div className="slide__buttons">
                   <button className="button slide__button-list"><FaMinus onClick={() => removeMovie(film.film)}/></button>
                   <button className="button slide__button-play"><FaRegPlayCircle/></button>
                </div>
            </div> 
        </SwiperSlide>
    )

    return (
            watchlist.length !== 0 && (
                <section className="section-slide">
                    <h2 className="section-slide__title">Watchlist</h2>
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
