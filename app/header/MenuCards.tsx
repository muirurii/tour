import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'
import { FiExternalLink } from 'react-icons/fi';
import { SubMenu } from '../Types';



const MenuCards = ({ subtitles }: SubMenu) => {

  const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const handleMouseMove: MouseEventHandler<HTMLLIElement> = (e) => {
    console.log(e.clientX, e.clientY)
    setMousePosition({ x: e.clientX - 290, y: e.clientY - 230 })
  }

  useEffect(() => {

  }, [mousePosition.x, mousePosition.y])


  return (
    <section className='hidden service-links text-black'>
      <li onMouseMove={handleMouseMove}>
        <ul
          className={` overflow-hidden grid grid-cols-2 gap-1 pt-1 px-1 place-items-center bg-grayFaded backdrop-blur-sm absolute top-[87px] left-32 right-32 
         rounded-sm 
        after:left-[${mousePosition.x}px] after:top-[${mousePosition.y}px]
        `}>
          <div style={{ left: mousePosition.x, top: mousePosition.y }} className="absolute w-80 h-80 bg-redishMain z-10 rounded-full transition-all duration-100"></div>
          {subtitles.map(({ title, link, img }) => (
            <Link key={title} href="#safari-packages" className='bg-[#e4e4e4]  w-full h-[200px] z-10 rounded-md overflow-hidden
            relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 border after:bg-inherit after:z-10 border-slate-50
            '>
              <section className="relative z-20">
                <p className="text-center py-2 border-b border-slate-50">{title}</p>
                <div className="absolute top-2 right-2"><FiExternalLink className='h-ful' /></div>
              </section>
            </Link>
          ))}
          <li>
          </li>
        </ul>
      </li>
    </section>
  )
}

export default MenuCards