import Link from "next/link"

const EventDesc = () => {
  return (
    <div className="font-inter py-[50px] pb-[80px] bg-[url('/assets/icons/milky-way.svg')] w-full bg-cover bg-center bg-no-repeat">
        <div className="w-[80%] max-w-[1600px] flex flex-col mx-auto gap-4">
            <h1 className="text-[45px]">Why Event Name?</h1>
            <p className="text-[20px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aperiam minima quibusdam, itaque necessitatibus velit assumenda nihil in saepe esse?</p>

            <p className="text-[20px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima assumenda tenetur voluptate maiores reiciendis.</p>

            <Link
                href="/"
                className="bg-[#15BFFD] text-[18px] rounded-full px-4 py-2 mt-2 w-fit"
            >
                Participate Now
            </Link>

        </div>
    </div>
  )
}

export default EventDesc