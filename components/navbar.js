/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`ml-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-gray-900 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex flex-col mt-16 justify-center items-center">
                <a className="text-xl font-normal my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-medium my-4" href="/results" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Results
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md px-4 justify-between items-center py-4 border-b-2 mb-8">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="">
              {/* <div className="text-xl flex items-center w-64 h-16">
                <Link href="/" passHref>
                  <Image src={DigexLogo} alt="DigexLogo"/>
                </Link>
              </div> */}
              <h1 className='text-xl'>School</h1>
            </div>
            <div className="">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-gray-100 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-gray-100 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-gray-100 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden text-lg md:flex">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about.html">
                        About
                    </NavLink>
                    <NavLink to="/results">
                        Results
                    </NavLink>
                    {/* <NavLink to="/gallery">
                        Gallery
                    </NavLink> */}
                </div>
            </div>
        </nav>
    )
}
