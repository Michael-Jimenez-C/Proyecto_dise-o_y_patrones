"use client";

import { useForm } from "react-hook-form";
import LoginLayout from "@/components/layouts/LoginLayout"
import Link from "next/link";
import Button from "@/components/button/Button";

export default function Login() {
  const { register, handleSubmit } = useForm();
  return (<LoginLayout><h1 className="text-2xl font-bold mb-6 text-green-700">Iniciar Sesión</h1>
  <form className="grid">
    <label className="mb-4">
      <span className="text-green-700">Correo electronico:</span>
      <input
        type="text"
        placeholder="Ej: juan@example.com"
        className="mt-1 w-full rounded-md p-1 text-green-700 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
      />
    </label>
    <label className=" mb-4">
      <span className="text-green-700">Contraseña:</span>
      <input
        type="password"
        placeholder="Ej: 12345"
        className=" mt-1 w-full rounded-md p-1 text-green-700 border-black border-2 focus:outline-slate-400"
      />
    </label>
    <label className=" mb-4">
      <span className="text-green-700">Confirme su Contraseña:</span>
      <input
        type="password"
        placeholder="Ej: 12345"
        className=" mt-1 w-full rounded-md p-1 text-green-700 border-black border-2 focus:outline-slate-400"
      />
    </label>
    <Button className="bg-green-500 rounded-xl hover:bg-green-600 text-white" handler={()=>{}}>Aceptar</Button>
    <p className="text-green-700 text-center">
      ¿ya tienes cuenta?{" "}
      <Link href="/login" className="font-bold">
        Ingresa
      </Link>
    </p>
  </form></LoginLayout>
    
  );
}
