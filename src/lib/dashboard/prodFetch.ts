import { environment } from "../environment"

export default async function prodFetch(id:any) {
  try {
    const response = await fetch(environment.BACKEND+'get/prod', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": id
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("No fue posible recuperar los productos");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
