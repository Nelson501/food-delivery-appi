import { useState } from "react"

const NavBar = ()=>{
    const links = ["Home", "Product", "Faq", "Contact"]
    const[activeLink, setActiveLink] = useState("")
    const[isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
        }

    // const isActive =(link)=>{
    //     return
    //     setActiveLink(link)
    // }
    return <>
    <nav className="flex justify-between p-10 items-center ">
        <div className="w-[150px] md:w-[200px]">
            <img src="/bellaOlonjeLogo.png" alt="logo"  />
        </div>
        
        <div className="hover:text-orange sm:hidden" onClick={toggleMenu}><img src="/burger.svg" width="20px"/></div>
        

        <div className=" hidden sm:flex justify-between items-center w-[580px]">
            {links.map((link)=>{
                return <a href="#" className={`hover:text-orange ${link == activeLink && "text-orange"
                }`} onClick={()=>{setActiveLink(link); console.log(link)}}>{link}</a>
            })}
            
        </div>
        
    </nav>

    <div id="mobile-menu"  className={`sm:hidden flex flex-col text-center my-1 gap-3 italic ${isMenuOpen ? "block": "hidden"}`}>
        {links.map((link)=>{
            return <a href="#" className="hover:text-orange">{link}</a>
        })}
    </div>

    </>
    
}

export default NavBar