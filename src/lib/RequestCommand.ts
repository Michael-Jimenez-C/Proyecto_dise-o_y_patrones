import { Request } from "./RequestInterface";
import RequestManager from "./requestManager";

class GetRequest implements Request {
  constructor(private receiver: RequestManager, private endpoint: string) {}
  async doRequest() {
    const result = this.receiver.get(this.endpoint);
    return result;
  }
}

export { GetRequest };
