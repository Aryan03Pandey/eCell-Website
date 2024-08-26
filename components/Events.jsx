import Image from "next/image"

import techMan from "../public/assets/icons/stickmain.svg"
import arrowWhite from "../public/assets/icons/arrow-white.svg"
import Link from "next/link"

const events = [
    {
        name: 'InnovateX',
        desc: 'Innovatex merges  technology and entrepreneurship, and several events are conducted under the banner of InnovateX. Each event is designed to inspire students and make them realize the potential power of a raw idea holding the power to alter the futuristic dynamic of business and technology',
        link: '/events',
        color: 'yellow-600'
    },
    {
        name: 'eSummit',
        desc: 'It is a premier entrepreneurship event that brings together innovators, industry leaders, investors  and aspiring entrepreneurs  to inspire, educate, and connect for a transformative experience',
        link: '/',
        color: '#1FCFF1'
    },
    {
        name: 'Ideathon',
        desc: 'It is a 48 hour brainstorming event that combines ideation and implementation. where participants generate and develop innovative solutions to real-world challenges, showcasing their creativity and problem-solving skills in a competitive and collaborative environment',
        link: '/',
        color: '#19FB9B'
    },
    {
        name: 'Consigliere',
        desc: 'It is a case study-based competition, challenging not just your problem-solving abilities but also your creativity. It compels you to think outside the box by evaluating participants analytical and problem-solving skills in each round. ' , 
        link: '/',
        color: '#9945FF'
    },
]

const colors = ['#1FCFF1', "#FFD512", '#19FB9B', '#9945FF']

const Events = () => {
  return (
    <div id="events" className="text-white font-inter py-[60px] bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat">
        <div className="w-[80%] max-w-[1600px] flex mx-auto gap-6">
            <div className="w-[40%]">
                <div>
                    <h1 className="text-[64px]">Events</h1>
                    <p className="text-[21px]">eCell’s events are where innovation comes to life. From hackathons to case studies, our events challenge you to push your limits and turn ideas into reality. Whether you're a budding entrepreneur or an experienced innovator, our events offer the perfect platform to connect, collaborate, and create. Join us to explore new opportunities and take your next big step.

.</p>
                </div>

                <div>
                    <Image 
                        src={techMan}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-5 w-[60%]">
                {/* card1 */}
                {
                    events.map((event, i) => {
                        return (
                            <div key={i} 
                                className="rounded-2xl bg-black/30 p-[24px] relative content-container"
                            >
                                {i>0 && <div className="coming-soon-overlay">Coming Soon</div>}
                                <div className="flex gap-2 items-center">
                                    <div className={`bg-white w-[2px] h-[30px]`}></div>
                                    <h2 className="text-[36px]">{event.name}</h2>
                                </div>

                                <div>
                                    <p>{event.desc}</p>
                                </div>

                                <div
                                    className="-mt-1 flex justify-end absolute bottom-4 right-4"
                                >
                                    <Link
                                        href={event.link}
                                        className="bg-[#6b6b6b] rounded-full flex p-2 w-[40px] h-[40px] justify-center items-center"
                                    >
                                        <Image 
                                            src={arrowWhite}
                                            height={12}
                                            width={12}
                                        />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Events