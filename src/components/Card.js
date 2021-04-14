import React from 'react'

const Card = (props) => {
    //console.log(props.item)
    return (
        <div>
            <div className="Card" style={{backgroungImage: props.poster}}> 
                <h2>{props.title}</h2>
                <span>{props.genre}</span>
                <p>{props.plot}</p>  
            </div>
        </div>
    )
}

export default Card
