import {useState, useEffect, Fragment} from 'react';
import {Header} from './Header'
import {Title} from './Title'
import {Footer} from './Footer'

export function SearchTitle(){

    return(
        <Fragment>
            <Header/>
            <Title/>
            <Footer/>
        </Fragment>
    )
}