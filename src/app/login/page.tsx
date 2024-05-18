"use client";

import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
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
