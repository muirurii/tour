/* eslint-disable @next/next/no-img-element */
"use client"

import { MouseEventHandler, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: "700"
})

let prevTimeout: string | number | NodeJS.Timeout | undefined;
let nextTimeout: string | number | NodeJS.Timeout | undefined;

const Hero = () => {

    const images: string[] = ["https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1024",
        "https://images.pexels.com/photos/46254/leopard-wildcat-big-cat-botswana-46254.jpeg?auto=compress&cs=tinysrgb&w=1024",
        "https://images.pexels.com/photos/39504/giraffe-animal-funny-facial-expression-39504.jpeg?auto=compress&cs=tinysrgb&w=1024"
    ]
    const [carouselIndex, setCarouselIndex] = useState<number>(0);


    useEffect(() => {

    }, [carouselIndex])

    const handlePrevious: MouseEventHandler<HTMLButtonElement> = () => {
        clearTimeout(prevTimeout);

        prevTimeout = setTimeout(() => {
            if (carouselIndex <= 0) {
                setCarouselIndex(2);
            } else {
                setCarouselIndex(carouselIndex - 1);
            }
        }, 200)
    }

    const handleNext: MouseEventHandler<HTMLButtonElement> = () => {
        clearTimeout(nextTimeout);

        nextTimeout = setTimeout(() => {
            if (carouselIndex >= 2) {
                setCarouselIndex(0);
            } else {
                setCarouselIndex(carouselIndex + 1);
            }
        }, 200)
    }

    return (
        <section className="fixed top-0 left-0 w-full h-screen -z-10">

            <section className="h-screen w-screen relative after:bg-[#fff4] after:absolute after:top-0 after:left-0
        after:bottom-0 after:right-0 backdrop-blur-sm after:z-10">
                <section className="absolute top-1/2 -translate-y-1/2 left-16 bg-red-0 z-30 uppercase">
                    <section className={`${orbitron.className}  text-[100px] leading-[100px] text-black`}>
                        <p className="mb-8 bg-gradient-to-t from-redishMain via-red-400 to-redishMain bg-clip-text text-transparent"><span className="">Explore</span> Kenya&apos;s</p>
                        <p className="bg-gradient-to-t from-redishMain via-red-400 to-redishMain bg-clip-text text-transparent">Stunning <span className="">Beauty</span></p>
                    </section>
                    <section className="mt-8">
                        <p></p>
                        <button className="py-5 px-12 flex gap-1 items-center justify-center bg-redishMain rounded-full hover:bg-redishFaded text-white transition-all hover:gap-3 
                    duration-[30ms]">Book now <FaArrowRight className="fill-white" /></button>
                    </section>
                </section>
                {images.map((img, index) => <img
                    className={`absolute top-0 left-0 w-screen h-screen transition-all duration-300 ${index !== carouselIndex ? "opacity-0" : "opacity-100"}`}
                    src={img} key={index + img} alt="WILDLIFE" />)}
                <section className="absolute bottom-16 left-16 z-30">
                    <button
                        onClick={handlePrevious}
                        className="bg-black p-4 m-2 rounded-full hover:bg-gray-700 transition-colors duration-300" ><FaArrowLeft className="fill-white" /></button>
                    <button
                        onClick={handleNext}
                        className="bg-black p-4 m-2 rounded-full hover:bg-gray-700 transition-colors duration-300" ><FaArrowRight className="fill-white" /></button>
                </section>
            </section>
        </section>
    )
}

export default Hero