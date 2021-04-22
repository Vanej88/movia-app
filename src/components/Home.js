import {useState, Fragment} from 'react'
import {Header} from './Header'
import {Hero} from './Hero'
import {SlideWatchlist} from './WatchList'
import {SliderNowPlaying} from './SliderNowPlaying'
import {SliderPopular} from './SliderPopular'
import {SliderTopRated} from './SliderTopRated'
import {Footer} from './Footer'
import { PageResults } from './Search'

function Home() {

  const [query, setQuery] = useState('')

  const sendQuery = (text) => setQuery(text)

  return (
    <div>
      <Header {...{sendQuery, query}}/> 
        {query ? ( 
        <Fragment>
          <PageResults {...{query}}/>
        </Fragment>) :

        (<Fragment>
          <Hero/>
          <SlideWatchlist/>
          <SliderNowPlaying/>
          <SliderPopular/> 
          <SliderTopRated/>
        </Fragment>)
      }

      <Footer />
    </div>
  );
}

export default Home