import axios from "axios";
import { environment } from "./environment";
class RequestManager {
  async get(path: string) {
    // console.log(`${environment.BACKEND}${path}`);
    return axios.get(`${environment.BACKEND}${path}`);
  }
}

export default RequestManager;