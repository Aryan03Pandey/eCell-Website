import {messages} from "../utils/timelineMessages"
import EventTimelineMessageCard from "./EventTimelineMessageCard";

const EventTimeline = () => {
    return (
        <section className="relative w-[80%] bg-transparent max-w-[1600px] h-full py-12 mx-auto flex justify-center">
            <div className="timeline w-[60%] min-w-[800px] h-full bg-transparent">
                <div className="">
                    {
                        messages.map((message, i) => {
                            return <EventTimelineMessageCard key={i} show={true} position={i%2 === 0 ? "left-container" : "right-container"} message={message} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default EventTimeline;