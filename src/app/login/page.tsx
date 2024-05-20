"use client";

import Button from "@/components/button/Button";
import LoginLayout from "@/components/layouts/LoginLayout";
import { PostRequest } from "@/lib/RequestCommand";
import { Request } from "@/lib/RequestInterface";
import RequestManager from "@/lib/requestManager";
import { userSchema } from "@/validations/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosResponse } from "axios";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGlobalContext } from "@/context/globalContext";
import { useRouter } from 'next/navigation'

type Inputs = {
  user: string;
  password: string;
};

export default function Login() {
  const router = useRouter()
  const { setIsLogged, setUser, user} = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const usuariosRequest: Request = new PostRequest(
      new RequestManager(),
      "usuarios/login",
      { email: data.user, secret: data.password }
    );
    const result = usuariosRequest.doRequest();
    result.then((response: AxiosResponse) => {
      if (response.status === 200) {
        setIsLogged(true);
        setUser(response.data)
        console.log("El usuario es correcto ");
        router.push('/dashboard')
      } else {
        console.error("Datos de ingreso erroneos");
      }
    });
  };
  return (
    <LoginLayout>
      <h1 className="text-2xl font-bold mb-6 text-green-700">Iniciar Sesión</h1>
      <form className="grid" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-4">
          <span className="text-green-700">Correo electronico:</span>
          <input
            type="text"
            placeholder="Ej: juan@example.com"
            className="mt-1 w-full rounded-md p-1 text-green-700 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
            id="user"
            {...register("user")}
          />
          {errors.user?.message && (
            <p className="text-rose-400 text-sm">{errors.user?.message}</p>
          )}
        </label>
        <label className=" mb-4">
          <span className="text-green-700">Contraseña:</span>
          <input
            type="password"
            placeholder="Ej: 12345"
            className=" mt-1 w-full rounded-md p-1 text-green-700 border-black border-2 focus:outline-slate-400"
            id="password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-rose-400 text-sm">{errors.password?.message}</p>
          )}
        </label>
        <Button
          className="bg-green-500 rounded-xl hover:bg-green-600 text-white"
          handler={() => {}}
        >
          Iniciar Sesión
        </Button>
        <p className="text-green-700 text-center">
          ¿No tienes cuenta?{" "}
          <Link href="/signin" className="font-bold">
            Registrate aquí
          </Link>
        </p>
      </form>
    </LoginLayout>
  );
}
