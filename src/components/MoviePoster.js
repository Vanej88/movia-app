import React from 'react'
import {read, write} from '../utilities/hooks/utils'


const MoviePoster = (props) => {
    return (
      <div>
            <img className="gallery__item" src={props.poster} />
            <button type="button" className="button fas fa-plus" ></button>
            <button type="button" className="button far fa-eye"></button>
        </div>
    )
}

export default MoviePoster
