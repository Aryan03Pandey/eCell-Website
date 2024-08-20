import Image from "next/image"

import techMan from "../public/assets/icons/stickmain.svg"
import arrowWhite from "../public/assets/icons/arrow-white.svg"
import Link from "next/link"

const events = [
    {
        name: 'eSummit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet sagittis elit vitae suscipit. Praesent vitae porta mi, ut ullamcorper urna. Vestibulum vulputate.',
        link: '/',
        color: '#1FCFF1'
    },
    {
        name: 'InnovateX',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet sagittis elit vitae suscipit. Praesent vitae porta mi, ut ullamcorper urna. Vestibulum vulputate.',
        link: '/events',
        color: 'yellow-600'
    },
    {
        name: 'Ideathon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet sagittis elit vitae suscipit. Praesent vitae porta mi, ut ullamcorper urna. Vestibulum vulputate.',
        link: '/',
        color: '#19FB9B'
    },
    {
        name: 'Consigliere',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet sagittis elit vitae suscipit. Praesent vitae porta mi, ut ullamcorper urna. Vestibulum vulputate.',
        link: '/',
        color: '#9945FF'
    },
]

const colors = ['#1FCFF1', "#FFD512", '#19FB9B', '#9945FF']

const Events = () => {
  return (
    <div className="text-white font-inter py-[60px] bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat">
        <div className="w-[80%] max-w-[1600px] flex mx-auto gap-6">
            <div className="w-[40%]">
                <div>
                    <h1 className="text-[64px]">Events</h1>
                    <p className="text-[21px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia adipisci. Exercitationem aspernatur quibusdam numquam repudiandae earum consequatur ut modi.</p>
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
                                className="rounded-2xl bg-black/30 p-[24px] "
                            >
                                <div className="flex gap-2 items-center">
                                    <div className={`bg-white w-[2px] h-[30px]`}></div>
                                    <h2 className="text-[36px]">{event.name}</h2>
                                </div>

                                <div>
                                    <p>{event.desc}</p>
                                </div>

                                <div
                                    className="-mt-1 flex justify-end"
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