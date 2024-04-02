/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Package } from '../Types';
import { BsLink, BsStarFill } from 'react-icons/bs';



const FeaturedCard = ({ packageObj: { title, description, images, link } }: { packageObj: Package }) => {

    // const [activeImage, setActiveImage] = useState<number>(0);
    // setTimeout(() => activeImage === 0 ? setActiveImage(1) : setActiveImage(0), 3000);

    return (
        <section className="p-4 relative h-full">
            <h1 className="pb-4 text-redishain">{title}</h1>
            <div className="absolute top-5 right-5">
                <BsStarFill className="fill-redishMain" />
            </div>
            <div className="h-96 w-full rounded-xl relative overflow-hidden
            after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-b after:from-transparent after:to-redishFaded"
            >
                {/* <img className={`${activeImage === 1 ? "opacity-0" : "opacity-100"} object-cover
                 absolute top-0 left-0 transition-all duration-600 h-full w-full`} src={images[0]} alt={title} /> */}
                <img className={` object-cover
                 absolute top-0 left-0 transition-all duration-600 h-full w-full`} src={images[1]} alt={title} />
                <p className="p-3 absolute bottom-4 left-4 z-10 text-slate-200">{description}</p>
            </div>
            <a href={link} className="float-right bg-redishMain rounded-full py-2 px-5 text-white mt-6 font-light">View </a>
        </section >
    )
}

export default FeaturedCard