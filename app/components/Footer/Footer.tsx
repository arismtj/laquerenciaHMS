import Link from "next/link";
import logoquerencia from "../../../public/querenciahotellogo.png";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="w-full  bg-[#718c98] grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 ">
        <div>
          <Link href="/">
            <img src={logoquerencia.src} className="logo w-36 " />
          </Link>
        </div>

        <div className="footer-content text-white mx-auto m-2 p-4 space-y-2 justify-center items-center">
          <div className="flex space-x-2">
            <FaSquarePhone className="size-8" />
            <h4 className="text-center xl:text-xl ">953 678 592</h4>
          </div>
          <div className="flex space-x-2 text-white">
            <MdEmail className="size-8" />
            <h4 className="text-center text-xl">jfpintov@hotmail.com</h4>
          </div>
          <div className="flex space-x-2">
            <FaLocationDot className="size-8" />
            <h4 className="text-justify text-xl">
              Panamericana sur km 97.5 lote 5A, Asia - Peru
            </h4>
          </div>
        </div>

        <div className="footer-content text-white mx-auto m-2">
          <a href="/habitaciones">
            <h4 className="text-center text-xl">HABITACIONES</h4>
          </a>

          <a href="/contacto">
            <h4 className="text-center text-xl">CONTACTENOS</h4>
          </a>
        </div>
      </div>

      <div className="bg-[#718c98]">
        <h4 className="text-white text-center">
          DERECHOS RESERVADOS 2024 "LA QUERENCIA"
        </h4>
      </div>
    </footer>
  );
}
