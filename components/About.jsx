import Image from "next/image"
import Link from "next/link"

import rocket from "../public/assets/icons/rocket.svg"
import bulb from "../public/assets/icons/bulb.svg"
import ladySitting from "../public/assets/images/lady-sitting.png"
import arrow from "../public/assets/icons/arrow.svg"

const About = () => {
  return (
    <section className="bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat">
        <div className="about-us-transparent-bg text-white font-inter py-[60px]">
            <div className="w-[80%] max-w-[1600px] flex mx-auto justify-between">
                <div className="w-[60%] flex flex-col gap-4">
                    <div>
                        <h1 className="font-medium text-[48px]">Who We Are</h1>
                    </div>
                    <div>
                        <p className="">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error neque maiores dicta odit et minus eveniet, quaerat quibusdam facere nam totam nostrum quod eos dolorum recusandae non!
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
                                <h2 className="text-[20px]">Lorem, ipsum.</h2>
                                <p className="text-[14px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, a.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-start">
                            <div>
                                <Image 
                                    src={bulb}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[20px]">Lorem, ipsum.</h2>
                                <p className="text-[14px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, a.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2 gap-2">
                        <button className="bg-[#9C37FD] cursor-default rounded-full px-4 py-2 uppercase text-[16px] font-light">
                            our team
                        </button>

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

                <div className="w-[40%] flex justify-end">
                    <div className="flex flex-col items-center">
                        <Image 
                            src={ladySitting}
                            className="w-[320px]"
                        />

                        <div className="flex flex-col justify-center gap-3 items-center p-4 rounded-2xl bg-[#0A123E] absolute top-[270px] w-[250px] h-[150px]">
                            <div className="flex flex-col gap-0 leading-4">
                                <p className="text-[#2EA7FF] text-[12px]">Lorem ipsum dolor sit amet.</p>
                                <h2 className="text-[18px]">Lorem, ipsum.</h2>
                            </div>

                            <p className="text-[12px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, a. Fugit, ea!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About