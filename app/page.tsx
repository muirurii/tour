
"use client"

import { MouseEventHandler, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {

  const images: string[] = ["https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1024",
    "https://images.pexels.com/photos/46254/leopard-wildcat-big-cat-botswana-46254.jpeg?auto=compress&cs=tinysrgb&w=1024",
    "https://images.pexels.com/photos/39504/giraffe-animal-funny-facial-expression-39504.jpeg?auto=compress&cs=tinysrgb&w=1024"
  ]


  const [carouselIndex, setCarouselIndex] = useState<number>(0);


  useEffect(() => {
    console.log(3)
  }, [carouselIndex])

  const handlePrevious: MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselIndex >= 2) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  }

  const handleNext: MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselIndex >= 2) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  }

  return (
    <main className="min-h-screen  w-screen bg-red-500">
      <section className="h-screen w-screen relative">
        {images.map((img, index) => <img className={`absolute top-0 left-0 w-screen h-screen ${index !== carouselIndex ? "opacity-0" : "opacity-100"}`} src={img} key={index + img} alt="WILDLIFE" />)}
        <section className="absolute bottom-16 left-16">
          <button
            onClick={handlePrevious}
            className="z-50 bg-black p-3 m-2 rounded-full hover:bg-gray-700 transition-colors duration-300" ><FaArrowLeft /></button>
          <button
            onClick={handleNext}
            className="z-50 bg-black p-3 m-2 rounded-full hover:bg-gray-700 transition-colors duration-300" ><FaArrowRight /></button>
        </section>

      </section>
    </main>
  );
}
