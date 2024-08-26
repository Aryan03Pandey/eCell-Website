import EventDesc from "@components/EventDesc"
import EventHeroSection from "@components/EventHeroSection"
import EventSpeakers from "@components/EventSpeakers"
import EventSponsors from "@components/EventSponsors"
import EventSubEvents from "@components/EventSubEvents"
// import EventTimeline from "@components/EventTimelines"
import EventTimeline from "@components/EventTimeline"

import "intersection-observer";

const InnovateX = () => {
  return (
    <div className="bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat text-white">
        <EventHeroSection />
        <EventDesc />
        <EventSubEvents />
        {/* <EventTimeline /> */}
        <EventTimeline />
        <EventSpeakers />
        {/* <EventSponsors /> */}
    </div>
  )
}

export default InnovateX