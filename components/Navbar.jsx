import logo from "../public/assets/icons/logo-white.svg"

import Image from "next/image"
import Link from "next/link"

const navLinks = [
    {
        text: "About Us",
        link: "#about"
    },
    {
        text: "Events",
        link: "#events"
    },
    {
        text: "Gallery",
        link: "#gallery"
    },
    {
        text: "Collaborations",
        link: "#collaborations"
    },
    {
        text: "Login",
        link: "/login"

    }
]

const Nav = () => {
    return (
      <nav className="text-white  py-4">
        <div className="w-[90%] max-w-[1600px] flex justify-between items-center mx-auto">
            <Link
                href="/"
                className="flex justify-center items-center w-fit gap-2 cursor-pointer"
            >
                <Image 
                    src={logo}
                    width={40} height={40}
                />
                <h1 className="text-white font-bold">eCell NSUT</h1>
            </Link>

            <div className="flex gap-6 font-bold">
                {
                    navLinks.map((navLink, i) => {
                        return <div>
                            <Link
                                href={navLink.link}
                            >
                                {navLink.text}
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
      </nav>
    )
  }
  
  export default Nav