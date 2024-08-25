import logo from "../public/assets/icons/logo-white.svg"

import Image from "next/image"

const MobileScreen = () => {
    return (
        <div className="text-white h-[100vh] p-4 flex flex-col gap-4 justify-center items-center">
            <Image src={logo} />

            <h1 className="text-[18px] text-center ">We are getting responsive soon. Meanwhile, check us out on a bigger screen.</h1>
        </div>
    )
}

export default MobileScreen;