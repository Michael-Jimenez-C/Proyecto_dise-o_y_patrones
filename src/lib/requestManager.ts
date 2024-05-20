import axios from "axios";
import { environment } from "./environment";
class RequestManager {
  async get(path: string) {
    return axios.get(`${environment.BACKEND}${path}`);
  }
  async post(path: string, data: any) {
    return axios.post(`${environment.BACKEND}${path}`, data);
  }
}

export default RequestManager;
