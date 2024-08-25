import Image from "next/image";

const SpeakerCard = ({speaker}) => {

    const {name, desc, image} = speaker;

    return <div 
                className="w-fit p-2 rounded-lg bg-[rgba(8,11,42,0.60)] border-[1px] border-[#15BFFD] transition-all duration-300"
                onClick={() => showEventDetails(event)}
            >
            <Image  
                src={image}
                width={230}
                className="rounded-lg"
            />

            <div className="p-2">
                <h3 className="text-[14px] font-semibold">{name}</h3>
                <p className="text-[12px]">{desc}</p>
            </div>
        </div>
}

export default SpeakerCard;