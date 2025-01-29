
import { FaUmbrellaBeach } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";




export default function Intro() {
  return (
    <section className="w-full">
      <div className=" mx-8 grid space-x-8 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center">
        <div className="my-auto ">
          <div className="pt-5">
            <h1 className="titulo text-center text-4xl font-josefin">
              LA QUERENCIA HOTEL
            </h1>
          </div>
          <div className="pt-3">
            <h3 className="font-josefin text-xl font-bold text-justify">
              Nos encontramos en el Boulevard de Asia, a 1 hora de Lima y te
              estamos esperando con los brazos abiertos en el corazón de la
              costa peruana.
            </h3>
            <br />
            <h3 className="font-josefin text-xl text-justify">
              Nuestro hotel, esta ubicado en el Km. 95 de la Panamericana Sur,
              te brinda fácil acceso a una de las playas más hermosas de la
              zona.
            </h3>
            <br />
            <h3 className="font-josefin text-xl text-justify">
              Relájate en nuestras piscinas, saborea los deliciosos platos de
              nuestro restaurante o simplemente déjate llevar por el ritmo de la
              vida playera.
            </h3>
            <br />

            <h3 className="font-josefin text-xl font-bold">
              ¡La aventura te espera!
            </h3>

            <div className="  items-center grid xl:grid-cols-2 md:grid-cols-2">
                {/* Acceso a la playa*/}
              <div className="flex">
                <div className=" m-3">
                  <FaUmbrellaBeach className="sombrilla size-8" />
                </div>
                <h4 className="my-auto font-bold">Acceso a la Playa</h4>
              </div>
              {/* Lugar seguro*/}
              <div className="flex">
                <div className=" m-3">
                  <IoShieldCheckmarkSharp className="sombrilla size-8" />
                </div>
                <h4 className="my-auto font-bold">Lugar seguro y cómodo</h4>
              </div>
               {/* asistencia permanente*/}
               <div className="flex">
                <div className=" m-3">
                  <FaClock className="sombrilla size-8" />
                </div>
                <h4 className="my-auto font-bold">Asistencia permanente</h4>
              </div>

                  {/* Mejor Experiencia*/}
                  <div className="flex">
                <div className=" m-3">
                  <FaRegThumbsUp className="sombrilla size-8" />
                </div>
                <h4 className="my-auto font-bold">Mejor experiencia</h4>
              </div>


            </div>
          </div>
        </div>

        {/* imagenes*/}

        <div className="w-full items-center justify-center p-5 flex">
          <div>
            <div className="m-3">
              <img
                src="/intro1.jpg"
                className="w-96 rounded-xl shadow-md shadow-black"
              />
            </div>
            <div className="m-3">
              <img
                src="/intro2.jpg"
                className="w-96 rounded-xl shadow-md shadow-black"
              />
            </div>
          </div>
          <div className="m-3 my-auto">
            <img
              src="/intro3.jpg"
              className="w-96 rounded-xl shadow-md shadow-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
