import React from 'react'
import { Package } from '../Types';
import { BsLink, BsStarFill } from 'react-icons/bs';



const FeaturedCard = ({ packageObj: { title, description, image, link } }: { packageObj: Package }) => {
    return (
        <section className="p-4 relative h-full">
            <h1 className="pb-4 text-redishain">{title}</h1>
            <div className="absolute top-5 right-5">
                <BsStarFill className="fill-redishMain" />
            </div>
            <div className="h-96 w-full rounded-sm absolut-[50px]"
                // style={{ backgroundImage: `url(${image})` }}>
                style={{ backgroundImage: `url(https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1024)` }}>
            </div>
            <p className="p-3">{description}</p>
            <a href={link} className="float-right bg-redishMain rounded-full py-2 px-5 text-white">View </a>
        </section>
    )
}

export default FeaturedCard