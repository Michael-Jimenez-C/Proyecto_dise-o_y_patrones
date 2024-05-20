import { environment } from "../environment"

export default async function invFetch(id:any) {
  try {
    const response = await fetch(environment.BACKEND+'get/invs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "orgid": id
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("No fue posible recuperar los inventarios");
      return 0;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
