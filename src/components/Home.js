import {Header} from './Header'
import {Hero} from './Hero'
import {SlideWatchlist} from './WatchList'
import {SliderNowPlaying} from './SliderNowPlaying'
import {SliderPopular} from './SliderPopular'
import {SliderTopRated} from './SliderTopRated'
import {Footer} from './Footer'

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <SlideWatchlist/>
      <SliderNowPlaying/>
      <SliderPopular/> 
      <SliderTopRated/>
      <Footer />
    </div>
  );
}

export default Home