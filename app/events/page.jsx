import EventDesc from "@components/EventDesc"
import EventHeroSection from "@components/EventHeroSection"
import EventSubEvents from "@components/EventSubEvents"

const InnovateX = () => {
  return (
    <div className="bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat text-white">
        <EventHeroSection />
        <EventDesc />
        <EventSubEvents />
    </div>
  )
}

export default InnovateX