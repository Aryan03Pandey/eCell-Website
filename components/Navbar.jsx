import logo from "../public/assets/icons/logo-white.svg"

import Image from "next/image"
import Link from "next/link"

const navLinks = [
    {
        text: "About Us",
        link: "/"
    },
    {
        text: "Events",
        link: "/"
    },
    {
        text: "Gallery",
        link: "/"
    },
    {
        text: "Collaborations",
        link: "/"
    }
]

const Nav = () => {
    return (
      <nav className="bg-blue-700 text-white flex justify-between items-center py-3 px-8">
        <div className="flex justify-center items-center w-fit gap-2">
            <Link
                href="/"
            >
                <Image 
                    src={logo}
                    className="w-fit"
                />
            </Link>

            <h1 className="text-white font-bold">eCell NSUT</h1>
        </div>

        <div className="flex gap-3 font-bold">
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
      </nav>
    )
  }
  
  export default Nav