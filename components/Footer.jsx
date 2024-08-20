import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat">
        <div className="text-white bg-[url('/assets/images/footer-text.svg')] bg-[length:100%_100%] bg-center bg-no-repeat pt-[200px]" >
            <div className="w-[80%] mx-auto max-w-[1600px]">
                <div className="flex justify-between items-center py-[50px]">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-[36px] ">show us yours, we'll show you ours</h2>
                        <div className="bg-white border-none outline-none rounded-lg px-3 py-2 w-fit flex items-center">
                            <input
                                className="bg-white border-none outline-none rounded-lg px-3 py-2 text-black"
                                type="email" 
                                placeholder="Enter email" 
                            />
                            <button className="text-black text-[30px] leading-none mb-[6px]">&rarr;</button>
                        </div>
                    </div>

                    <div className="text-[18px] flex gap-16">
                        <div>
                            <h3 className="text-[rgb(140,1,250)]/40  uppercase">help</h3>
                            <ul className="text-white font-light">
                                <li><Link href="/">Contact Us</Link></li>
                                <li><Link href="/">Raise Issue</Link></li>
                                <li><Link href="/">FAQs</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[rgb(140,1,250)]/40  uppercase">help</h3>
                            <ul className="text-white font-light">
                                <li><Link href="/">Contact Us</Link></li>
                                <li><Link href="/">Raise Issue</Link></li>
                                <li><Link href="/">FAQs</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[rgb(140,1,250)]/40  uppercase">help</h3>
                            <ul className="text-white font-light">
                                <li><Link href="/">LinkedIn</Link></li>
                                <li><Link href="/">Instagram</Link></li>
                                <li><Link href="/">Facebook</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between pt-6 pb-4">
                    <h2 className="opacity-35 self-center">&copy; Copyright 2024 </h2>
                    <button className="self-end">
                        <Link href='#'>&uarr; Back to top</Link>
                    </button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer