import Image from "next/image"

import pic1 from "../public/assets/images/gallery2/1.jpg"
import pic2 from "../public/assets/images/gallery2/2.jpg"
import pic3 from "../public/assets/images/gallery2/3.jpg"
import pic4 from "../public/assets/images/gallery2/4.jpg"
import pic5 from "../public/assets/images/gallery2/5.jpg"
import pic6 from "../public/assets/images/gallery2/6.jpg"
import pic7 from "../public/assets/images/gallery2/7.jpg"
import pic8 from "../public/assets/images/gallery2/8.jpg"
import pic9 from "../public/assets/images/gallery2/9.jpg"
import pic10 from "../public/assets/images/gallery2/10.jpg"
import pic11 from "../public/assets/images/gallery2/11.jpg"
import pic12 from "../public/assets/images/gallery2/12.jpg"


export const ImageSection = ({ images, speed }) => {
    const imagesStyle = {
        animation: `swipe ${speed}ms linear infinite`,
    };

    return (
        <div className='images' style={imagesStyle}>
        {images.map(({ scr, name }) => (
            <div className='image'>
            <Image src={scr} alt={name} />
            </div>
        ))}
        </div>
    );
}

const Gallery = ({ images, speed }) => {
    return (
        <section id="gallery" className="bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat">
            <div className="font-inter py-[50px] pb-[150px] bg-[url('/assets/icons/milky-way.svg')] w-full bg-cover bg-center bg-no-repeat">
                <div className=" flex flex-col mx-auto gap-12">

                    <h1 className="text-white text-[64px] text-center">Explore a thriving Community</h1>

                    <div className="flex justify-center">
                        <div class="row w-[80%]">
                            <div class="column">
                                <Image src={pic1}  />
                                <Image src={pic2}  />
                                <Image src={pic3}  />
                                <Image src={pic4}  />
                            </div>
                            <div class="column">
                                <Image src={pic5}  />
                                <Image src={pic6}  />
                                <Image src={pic7}  />
                                <Image src={pic8}  />
                            </div>
                            <div class="column">
                                <Image src={pic9}  />
                                <Image src={pic10}  />
                                <Image src={pic11}  />
                                <Image src={pic12}  />
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </section>
    );
}

export default Gallery;