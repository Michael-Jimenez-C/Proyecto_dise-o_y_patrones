import { AxiosResponse } from "axios";
import { GetRequest, PostRequest } from "@/lib/RequestCommand";
import ServiceInterface from "@/lib/ServiceInterface";
import RequestManager from "@/lib/requestManager";
import { Request } from "@/lib/RequestInterface";

export default class RealOrganizationService implements ServiceInterface {
  async getAll() {
    const organizationRequest: Request = new GetRequest(
      new RequestManager(),
      "organizacion"
    );
    const result = organizationRequest.doRequest();
    return result.then((response: AxiosResponse) => {
      if (response.status === 200) {
        console.log("Consulta correcta");
        return response.data
      } else {
        console.error("Error en la consulta");
      }
    });
  }
}
