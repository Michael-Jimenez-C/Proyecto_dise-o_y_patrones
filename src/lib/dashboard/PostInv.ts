import { environment } from "../environment"

export default async function invFetch(nombre:string, ubicacion:string, organizacion_id:number) {
  try {
    const response = await fetch(environment.BACKEND+'get/invs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "nombre": nombre,
        "ubicacion": ubicacion,
        "organizacion_id": organizacion_id
      }),
    });

    if (response.ok) {
      return true;
    } else {
      console.error("No fue posible recuperar los inventarios");
      return false;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
