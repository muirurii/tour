"use client"

import Link from "next/link";
import { MouseEventHandler, useState } from "react";

const Header = () => {

  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

  const handleShowServices: MouseEventHandler<HTMLLIElement> = (e) => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <header>
      <nav>
        <ul className="fixed top-0 left-0 z-10 w-screen flex justify-evenly items-center bg-[#fff3] backdrop-blur-sm text-black py-8">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li onClick={handleShowServices}
            // onMouseLeave={handleShowServices}
            className=" "
          >
            Services
            {isServicesOpen && (
              <ul className="flex flex-col bg-slate-400 absolute top-[100px] left-32 right-32 p-2 rounded-sm">
                <li>
                  <Link href="#safari-packages">Safari Packages</Link>
                </li>
                <li>
                  <Link href="#destinations">Destinations</Link>
                </li>
                <li>
                  <Link href="#accommodations">Accommodations</Link>
                </li>
                <li>
                  <Link href="#activities">Activities</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#travel-tips">Travel Tips</Link>
          </li>
          <li>
            <Link href="#booking">Booking & Reservations</Link>
          </li>
          <li>
            <Link href="#customer-support">Customer Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
