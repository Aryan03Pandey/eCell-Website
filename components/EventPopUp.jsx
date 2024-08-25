import Link from "next/link"
import Image from "next/image"

import arrow from "../public/assets/icons/arrow.svg"
import line from '../public/assets/icons/squigly-line.svg'
import star from '../public/assets/icons/star.svg'
import close from '../public/assets/icons/close.svg'
import { useEffect } from "react"

const EventPopUp = ({event, showEvent, setShowEvent}) => {
    const {name, desc, link, image} = event

  return (
    <div className={`eventPopUp popup flex items-center py-[20px] h-[90%] border-2 w-[95%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1600px] border-[#15BFFD] z-50 rounded-2xl shadow-lg opacity-0 transition-opacity duration-500`}>
        <Image  
            src={line}
            className="absolute right-0 top-[200px] -z-10"
            height={400}
            width={400}
        />

        <Image  
            src={close}
            className="absolute right-2 top-2 cursor-pointer"
            height={30}
            width={30}
            onClick={() => setShowEvent(false)}
        />

        <Image src={star} className="absolute top-[15%] right-[10%]" width={20} height={20} />
        <Image src={star} className="absolute top-[20%] right-[40%]" width={10} height={10} />
        <Image src={star} className="absolute top-[30%] left-[5%]" width={15} height={15} />
        <Image src={star} className="absolute top-[60%] left-[30%]" width={15} height={15} />
        <Image src={star} className="absolute top-[50%] left-[8%]" width={20} height={20} />
        <Image src={star} className="absolute top-[40%] right-[7%]" width={10} height={10} />

        <div className="w-[80%] max-w-[1600px] mx-auto flex justify-between items-center">
            <div className="w-[40%] flex flex-col gap-3 justify-center">
                <h1 className="text-[80px] font-bold">{name}</h1>
                <p className="text-[16px]">{desc}</p>

                <div className="flex gap-3 items-center mt-3">
                    <Link
                        href={link}
                        className="bg-white text-black text-[20px] rounded-full px-4 py-2 flex items-center cursor-pointer"
                    >
                    <div className="text-black text-[20px] bg-white rounded-full w-fit px-4 py-2">Participate Now</div>

                    </Link>
                </div>
            </div>

            <div>
                {/* <div className="mainEventFrame"></div> */}

                <div className=" rounded-xl bg-[rgba(8,11,42,0.60)] p-2 w-[450px]">
                    <Image 
                        src={image} 
                        className="object-cover rounded-xl"
                    />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default EventPopUp