import Link from "next/link"

const EventDesc = () => {
  return (
    <div className="font-inter py-[50px] pb-[80px] bg-[url('/assets/icons/milky-way.svg')] w-full bg-cover bg-center bg-no-repeat">
        <div className="w-[80%] max-w-[1600px] flex flex-col mx-auto gap-4">
            <h1 className="text-[45px]">Why InnovateX</h1>
            <p className="text-[20px]">This edition of InnovateX, themed "AI and Sustainability" encapsulates a series of events on the path of Innovation for a Greener Future and Mitigating Environmental Impact.</p>

            <p className="text-[20px]">InnovateX aims to inspire the next generation of innovators and change-makers, recognizing their capacity to positively impact society and elevate the nation to new heights.</p>

            <Link
                href="https://unstop.com/college-fests/innovatex24-ecell-nsut-262856"
                className="bg-[#15BFFD] text-[18px] rounded-full px-4 py-2 mt-2 w-fit"
            >
                Participate Now
            </Link>

        </div>
    </div>
  )
}

export default EventDesc