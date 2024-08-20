import Link from "next/link"
import Image from "next/image"

import arrow from "../public/assets/icons/arrow.svg"
import line from '../public/assets/icons/squigly-line.svg'
import star from '../public/assets/icons/star.svg'
import innovateXLogo from "../public/assets/images/innovateX_logo.png"

const EventHeroSection = () => {
  return (
    <div className="py-[40px]">
        <Image  
            src={line}
            className="absolute right-0 top-[200px]"
            height={400}
            width={400}
        />

        <Image src={star} className="absolute top-[15%] right-[10%]" width={20} height={20} />
        <Image src={star} className="absolute top-[20%] right-[40%]" width={10} height={10} />
        <Image src={star} className="absolute top-[30%] left-[5%]" width={15} height={15} />
        <Image src={star} className="absolute top-[60%] left-[30%]" width={15} height={15} />
        <Image src={star} className="absolute top-[50%] left-[8%]" width={20} height={20} />
        <Image src={star} className="absolute top-[40%] right-[7%]" width={10} height={10} />

        <div className="w-[80%] max-w-[1600px] mx-auto flex justify-between items-center">
            <div className="w-[40%] flex flex-col gap-3 justify-center">
                <h1 className="text-[80px] font-bold">Event Name</h1>
                <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta distinctio adipisci labore consequuntur vel blanditiis nam fugit ut quaerat eligendi!</p>

                <div className="flex gap-3 items-center mt-3">
                    <div className="text-black text-[20px] bg-white rounded-full w-fit px-4 py-2">Participate Now</div>

                    <Link
                        href="/"
                        className="bg-white rounded-full flex p-2 w-[40px] h-[40px] justify-center items-center"
                    >
                        <Image 
                            src={arrow}
                            height={12}
                            width={12}
                        />
                    </Link>
                </div>
            </div>

            <div>
                <div className="mainEventFrame"></div>
                
            </div>
        </div>
    </div>
  )
}

export default EventHeroSection