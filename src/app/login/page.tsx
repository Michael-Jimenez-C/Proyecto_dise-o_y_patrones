"use client";

import { useForm } from "react-hook-form";
import LoginLayout from "@/layouts/LoginLayout"
import Link from "next/link";
import Button from "@/components/button/Button";

export default function Login() {
  const { register, handleSubmit } = useForm();
  return (<LoginLayout><h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
  <form className="grid">
    <label className="mb-4">
      <span className="text-gray-700">Correo electronico:</span>
      <input
        type="text"
        value= "{email}"
        placeholder="Ej: juan@example.com"
        className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
      />
    </label>
    <label className=" mb-4">
      <span className="text-gray-700">Contraseña:</span>
      <input
        type="password"
        value="{password}"
        placeholder="Ej: 12345"
        className=" mt-1 w-full rounded-md p-1 border-black border-2 focus:outline-slate-400"
      />
    </label>
    <Button className="" handler={()=>{}}>Iniciar Sesión</Button>
    <p className="text-gray-700 text-center">
      ¿No tienes cuenta?{" "}
      <Link href="/register" className="font-bold">
        Registrate
      </Link>
    </p>
  </form></LoginLayout>
    
  );
}
