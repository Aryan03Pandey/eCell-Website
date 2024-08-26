
const EventTimelineMessageCard = ({message, position, show}) => {
    const { date, time, title, desc } = message
    // const date = "28th Aug", time = "12:00 PM", title = "Speaker Session", desc = "join us to have some amazing time"

  return (
    <div class={`container relative transition-all duration-1000 w-[50%] max-w-[450px] px-6 ${position} `}>
      <div className="timeline-bullet"></div>

        <div className=" bg-[rgba(8,11,42,0.60)] rounded-lg border-[#15BFFD] border-[1px] items-center p-6 ">
            <h3 className="text-[20px] text-center">{date}, {time}</h3>
            <h2 className="text-[32px] text-left mt-[2px]">{title}</h2>
            <p className="text-[16px] text-left font-light mt-[4px]">{desc}</p>
        </div>
    </div>
  )
}

export default EventTimelineMessageCard