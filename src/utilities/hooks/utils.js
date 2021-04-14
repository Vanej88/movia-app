
export function write(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}

export function read(key){
    return JSON.parse(localStorage.getItem(key))
}

export const apiKey_OMDB = "c9480f3b"; 

export const apiKey_TMDB = "843bd49154bbf3bc93413367405acebd";

export function addMovie(film){
    let watchList = read('whatchlist-data') ? read('whatchlist-data') : []

    const movieExists = watchList.find(film => film.film.id === film.film.id)

    if(!movieExists){
        watchList.push({film})
        write('whatchlist-data', watchList)
        console.log(watchList)
    }
    
}

export function removeMovie(film){
    let watchList = read('whatchlist-data') ? read('whatchlist-data') : []

    const favMovies = watchList.filter(item => item.film.id !== item.film.id)
    write('whatchlist-data', favMovies)
}
  
