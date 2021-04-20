import {Fragment} from 'react'

export function Title(props){
    return(
        <Fragment>
            <p>{props.title}</p>
            <img src={props.poster}></img>
        </Fragment>
    )
}


