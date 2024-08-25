import Image from "next/image"

import logo from "../public/assets/icons/logo-white.svg"

const LandingPageHeader = () => {
    return (
    <div className="App">
        <div className="gradientOverlay"></div>
        <div className={`pinkishCircle circleTopLeft`}></div>
        <div className={`pinkishCircle circleBottomRight`}></div>
        
        <div className="main flex gap-4">
            <Image src={logo} width={100} height={100} />
            <h1 className="title">Push Boundaries Beyond Your Limits</h1>
            <p className="description">
            Unlock your potential, challenge the ordinary. Embrace the journey of innovation and create something extraordinary.
            </p>
        </div>
    </div>
    )
}

export default LandingPageHeader