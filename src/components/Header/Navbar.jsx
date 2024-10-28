import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";

export default function Navbar() {

    const [open, setOpen] = useState(false);


    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "FAQ", path: "/faq" },
      ];

  return (
    
    <nav className="bg-black text-white p-6">
        <div className="text-2xl md:hidden" onClick={()=> setOpen(!open)}>
            {
                open==true?<CgClose></CgClose>:<TiThMenu ></TiThMenu>
            }
        
        </div>
        <ul className={`md:flex gap-10 absolute md:static bg-black text-gray-400 px-6 shadow-lg mt-2 duration-1000 ${open?'top-16':'-top-60'} `}>
            {
                routes.map(route=> <Link key={route.id} route={route} ></Link>)
            }
        </ul>
    </nav>
  )
}
