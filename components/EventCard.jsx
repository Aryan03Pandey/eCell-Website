import Image from "next/image";

const EventCard = ({event, showEventDetails}) => {

    const {name, desc, link, image} = event;

    return <div 
                className="w-fit p-2 rounded-lg bg-[rgba(8,11,42,0.60)] border-[1px] border-[#15BFFD] cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => showEventDetails(event)}
            >
            <Image  
                src={image}
                width={300}
                className="rounded-lg"
            />
        </div>
}

export default EventCard;