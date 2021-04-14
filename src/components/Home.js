import {Header} from './Header'
import {Hero} from './Hero'
import {SlideWatchlist} from './WatchList'
import {Footer} from './Footer'
import {Slider} from './Slider'



function SectionSlider() {

  return (
    <div className="slide">
      <section className="slide-watchlist" />
      <Slider />
 
      <Slider />

      <Slider />
    </div>
  );
}


function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <SlideWatchlist/>
      <SectionSlider/>
      <Footer />
    </div>
  );
}

export default Home