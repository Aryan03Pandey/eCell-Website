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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet sagittis elit vitae suscipit. Praesent vitae porta mi, ut ullamcorper urna. Vestibulum vulputate maximus aliquam.
            </p>
        </div>
    </div>
    )
}

export default LandingPageHeader