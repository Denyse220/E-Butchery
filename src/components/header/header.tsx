import { useState } from 'react'
//import MenuIcon from './assets/bars-solid.svg'
//import CloseIcon from './assets/window-close-regular.svg'

export default function Header(){

    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true) 
    
    }
    return(
        <div className="fixed w-full h-10 bg-black text-white items-center">
            <div className="brand-logo text-sm font-bold">

            </div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold">
              <li className=" menu-list-item px-2"><a href=" ">HOME</a></li>
              <li className=" menu-list-item px-2"><a href=" ">ABOUT</a></li>
              <li className=" menu-list-item px-2"><a href=" ">LOGIN</a></li>
              <li className=" menu-list-item px-2"><a href=" ">SIGNUP</a></li>
            </ul>
            <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
                menu
               
                </button>
{(isSideMenuOpen) ? SideMenu() : ''}
        </div>
    )


}

function SideMenu() {
   return(
       <div className="fixed h-screen w-1/4 bg-blue-200 top-8">
           <ul className="menu-list flex flex-col text-xs font-bold">
           <li className=" menu-list-item px-2 hover:bg-white hover:text-blue-700"><a href=" ">HOME</a></li>
            <li className=" menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href=" ">ABOUT</a></li>
            <li className=" menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href=" ">LOGIN</a></li>
            <li className=" menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href=" ">SIGNUP</a></li>    
           </ul>
          
       </div>
   )
}

