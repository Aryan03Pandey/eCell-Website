import Link from "next/link"
import Image from "next/image"

import arrow from "../public/assets/icons/arrow.svg"
import line from '../public/assets/icons/squigly-line.svg'
import star from '../public/assets/icons/star.svg'
// import innovateXLogo from "../public/assets/images/innovateX_logo.png"
import innovateXLogo from "../public/assets/images/logoInnovateX.png"

const EventHeroSection = () => {
  return (
    <div className="py-[40px]">
        <Image  
            src={line}
            className="absolute right-0 top-[200px] -z-10"
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
                <h1 className="text-[80px] font-bold">InnovateX'24</h1>
                <p className="text-[16px]">InnovateX, the flagship event organized by eCell NSUT, is dedicated to fostering a mindset of Innovation among students and propelling the growth of the startup ecosystem. Our mission centers on creating an ideal platform for individuals with distinctive minds and disruptive ideas that can contribute to enhancing lives.
                </p> 
                <p>This edition of InnovateX, themed "AI and Sustainability" encapsulates a series of events on the path of Innovation for a Greener Future and Mitigating Environmental Impact.</p>

                <div className="flex gap-3 items-center mt-3">
                    <Link
                        href="https://unstop.com/college-fests/innovatex24-ecell-nsut-262856"
                        target="_blank"
                        className="bg-white text-black text-[20px] rounded-full px-4 py-2 flex items-center cursor-pointer"
                    >
                        Participate Now
                    </Link>
                </div>
            </div>

            <div>
                {/* <div className="mainEventFrame">
                <Image src={innovateXLogo} className="z-50" />
                </div> */}

                <div className=" rounded-xl bg-[rgba(8,11,42,0.60)] p-2 w-[650px]">
                    <Image 
                        src={innovateXLogo} 
                        className="object-cover rounded-xl"
                    />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default EventHeroSection