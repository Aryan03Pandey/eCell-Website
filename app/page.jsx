import About from "@components/About"
import Community from "@components/Community"
import Events from "@components/Events"
import Gallery from "@components/Gallery"
import {images} from '../utils/images'
import Collaborations from "@components/Collaborations"
import LandingPageHeader from "@components/LandingPageHeader"

const Home = () => {
  return (
    <div className="">
      <LandingPageHeader />
      <About />
      <Events />
      <Community />
      {/* <Collaborations /> */}
      <Gallery images={images} speed={30000} />
    </div>
  )
}

export default Home