import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'
import { BiPackage } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';
import { TbPackageExport } from 'react-icons/tb';



const MenuCards = ({ menu: { subtitles } }: { menu: { subtitles: { title: string, link: string, img: string }[] } }) => {

  const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const handleMouseMove: MouseEventHandler<HTMLLIElement> = (e) => {
    console.log(e.clientX, e.clientY)
    setMousePosition({ x: e.clientX - 190, y: e.clientY - 190 })
  }

  useEffect(() => {

  }, [mousePosition.x, mousePosition.y])


  return (
    <section className='hidden service-links text-black'>
      <li onMouseMove={handleMouseMove}
      // group-first:hover:bg-[#fa3737]

      >
        <ul
          className={` overflow-hidden grid grid-cols-2 gap-1 place-items-center bg-slate-100 absolute top-[90px] left-32 right-32 
         rounded-sm 
        after:left-[${mousePosition.x}px] after:top-[${mousePosition.y}px]
        `}>
          <div style={{ left: mousePosition.x, top: mousePosition.y }} className="absolute w-80 h-80 bg-slate-200 z-10 rounded-full transition-all duration-100"></div>
          {subtitles.map(({ title, link, img }) => (
            <Link key={title} href="#safari-packages" className='bg-slate-200  w-full h-[200px] z-10 
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