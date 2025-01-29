'use client';

import {ChangeEvent, FormEvent, useState} from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  email:'',
  name:'',
  password:'',
}

const Auth = () => {

  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none ";

    const handleInputchange = (event: ChangeEvent<HTMLInputElement>) =>{
      const {name, value} = event.target;
      setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault ();

      try{
        console.log(formData);
      } catch(error){
        console.log(error);
      } finally{
        setFormData(defaultFormData);

      }
    };

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Crea una cuenta
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillFacebook className="mr-3 text-4xl cursor-pointer text-black " />
            |
            <FcGoogle className="ml-3 text-4xl cursor-pointer " />
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@company.com"
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputchange}
          />

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombres y Apellidos "
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleInputchange}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            minLength={6}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputchange}
          />

          <button type="submit" className="w-full bg-sky-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Registrar
          </button>
        </form>

        <button className="text-blue-700 underline">
          login
        </button>
      </div>
    </section>
  );
};

export default Auth;
