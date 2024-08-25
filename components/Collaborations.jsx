import google from "../public/assets/images/google.png"

import Image from "next/image"

const Collaborations = () => {
    return <section className="bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat">
        <div className="font-inter py-[40px]">
            <div className="w-[80%] max-w-[1600px] flex flex-col mx-auto gap-12">

                <h1 className="text-white text-[64px] text-center">Collaborations</h1>

                <div className="flex justify-between">
                    <h2 className="font-bold text-white text-[32px]">Google</h2>
                    <h2 className="font-bold text-white text-[32px]">Google</h2>
                    <h2 className="font-bold text-white text-[32px]">Google</h2>
                    <h2 className="font-bold text-white text-[32px]">Google</h2>
                    <h2 className="font-bold text-white text-[32px]">Google</h2>
                    <h2 className="font-bold text-white text-[32px]">Google</h2>
                </div>
            </div>
        </div>
    </section>
}

export default Collaborations;