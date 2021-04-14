import React from 'react'
import {read, write} from '../utilities/hooks/utils'

const watchMovieList = ev => {

    const watchList = read('watchList') ? read('watchList') : []

    

}

const MoviePoster = (props) => {
    return (
        <div>
            <img className="gallery__item" src={props.poster} />
            <button type="button" className="button fas fa-plus" onClick={watchMovieList}></button>
            <button type="button" className="button far fa-eye"></button>
        </div>
    )
}

export default MoviePoster
