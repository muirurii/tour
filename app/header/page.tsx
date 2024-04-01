"use client"

import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import MenuCards from "./MenuCards";
import { SubMenu } from "../Types";

const Header = () => {

  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

  const handleShowServices: MouseEventHandler<HTMLLIElement> = (e) => {
    setIsServicesOpen(!isServicesOpen)
  }

  const servicesSubItems: SubMenu = {
    subtitles: [{
      title: "Safari Packages",
      link: "safari-packages",
      img: "",
    },
    {
      title: "Destinations",
      link: "destinations",
      img: "",
    },
    {
      title: "Accomodations",
      link: "Accomodations",
      img: "",
    },
    {
      title: "Activities",
      link: "Activities",
      img: "",
    }
    ]
  }

  return (
    <header>
      <nav>
        <ul className="fixed top-0 left-0 z-10 w-screen flex justify-evenly items-center bg-grayFaded backdrop-blur-sm text-black">
          <li>
            <Link href="#home" className="py-8 inline-block hover:text-redishMain">Home</Link>
          </li>
          <li>
            <Link href="#about" className="py-8 inline-block hover:text-redishMain">About Us</Link>
          </li>
          <li
            className="service-menu cursor-pointer py-8 hover:text-redishMain"
          >
            Services
            {<MenuCards subtitles={servicesSubItems.subtitles} />}
          </li>
          <li>
            <Link href="#gallery" className="py-8 inline-block hover:text-redishMain">Gallery</Link>
          </li>
          <li>
            <Link href="#travel-tips" className="py-8 inline-block hover:text-redishMain">Travel Tips</Link>
          </li>
          <li className="service-menu cursor-pointer py-8 hover:text-redishMain">
            {/* <Link href="#booking" className="py-8 inline-block hover:text-redishMain">Booking & Reservations</Link> */}
            Booking & Reservations
            {<MenuCards subtitles={servicesSubItems.subtitles} />}
          </li>
          <li>
            <Link href="#customer-support" className="py-8 inline-block hover:text-redishMain">Customer Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
