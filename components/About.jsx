import Image from "next/image"
import Link from "next/link"

import rocket from "../public/assets/icons/rocket.svg"
import bulb from "../public/assets/icons/bulb.svg"
import team from "../public/assets/images/Team.jpg"
import arrow from "../public/assets/icons/arrow.svg"

const About = () => {
  return (
    <section id="about" className="bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat">
        <div className="about-us-transparent-bg text-white font-inter py-[60px]">
            <div className="w-[80%] max-w-[1600px] flex mx-auto justify-between">
                <div className="w-[60%] flex flex-col gap-4">
                    <div>
                        <h1 className="font-medium text-[48px]">Who We Are</h1>
                    </div>
                    <div>
                        <p className="">
                        eCell is a vibrant community of innovators and entrepreneurs dedicated to transforming ideas into impactful realities. We provide a collaborative space, mentorship, and resources to empower individuals to push the boundaries of creativity and innovation. Our goal is to cultivate the next generation of leaders who are driven to make a difference. At eCell, we believe in the power of innovation to shape a better future.


                        </p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="flex gap-2 justify-start">
                            <div>
                                <Image 
                                    src={rocket}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[20px]">Mission</h2>
                                <p className="text-[14px]">Empower individuals to turn their creative ideas into reality through innovation and collaboration.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-start">
                            <div>
                                <Image 
                                    src={bulb}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[20px]">Vision</h2>
                                <p className="text-[14px]">To transform ideas into impactful solutions that drive positive change in society.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex mt-2 gap-2">
                        <Link 
                            href="/" 
                            className="bg-[#9C37FD] rounded-full px-4 py-2 uppercase text-[16px] font-light flex justify-center items-center w-max cursor-pointer"
                        >
                            our team
                        </Link>
                    </div> */}
                </div>

                <div className="w-[50%] flex justify-end">
                    <div className="p-2 rounded-lg bg-black/30">
                        <Image 
                            src={team}
                            className="w-[500px] rounded-lg"
                        />
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About