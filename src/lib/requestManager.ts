import axios from "axios";
import { environment } from "./environment";
class RequestManager {
  async get(path: string) {
    console.log(`${environment.BACKEND}${path}`);
    let peticion = await axios.get(`${environment.BACKEND}${path}`);
    return peticion;
  }
}

export default RequestManager;
