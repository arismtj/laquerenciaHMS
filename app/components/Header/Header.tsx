import Link from "next/link";

import background from "../../../public/playa1.jpg";
import logoquerencia from "../../../public/querenciahotellogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";

export default function Header() {
  return (
    <header className=" h-[61vh] bg-no-repeat bg-cover bg-center ">
      {/* fondo */}
      <img src={background.src} className="logo h-[60vh] w-[100%]" />

      <div className="cabeza fixed top-0 left-0 w-[100%] p-[1.3rem] flex justify-between items-center z-[100]">
        {/* logo */}
        <Link href="/">
          <img src={logoquerencia.src} className="logo w-36 " />
        </Link>

        <Link href="/auth">
          <HiMiniUserCircle className="sombrilla1 size-10 mr-20" />
          
        </Link>

        {/* hamburguesa y cerrar */}

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <GiHamburgerMenu className="bx bx-menu" id="menu-icon" />
          <IoMdClose className="bx bx-x" id="close-icon" />
        </label>

        {/* nav */}
        <nav className="navbar pr-10 ">
          <a href="/">Home</a>
          <a href="/habitaciones">Habitaciones</a>
          <a href="/galeria">Galeria</a>
          <a href="/contacto">Contacto</a>
          <a></a>
        </nav>
      </div>
    </header>
  );
}