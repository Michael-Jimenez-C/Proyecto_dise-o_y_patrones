"use client";

import { GetRequest, Request } from "@/lib/command/ICommand";
import { environment } from "@/lib/environment";
import RequestManager from "@/lib/requestManager";
import { useForm } from "react-hook-form";

export default function Login() {
  console.log("BACKEND", environment.BACKEND);
  let usuariosRequest: Request = new GetRequest(
    new RequestManager(),
    "usuarios"
  );
  console.log(usuariosRequest.doRequest());
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          // console.log(data);
          const result = usuariosRequest.doRequest();
          console.log(result);
        })}
      >
        <label htmlFor="user">User</label>
        <input type="text" id="user" {...register("user")} />

        <label htmlFor="password">password</label>
        <input type="text" id="password" {...register("password")} />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
