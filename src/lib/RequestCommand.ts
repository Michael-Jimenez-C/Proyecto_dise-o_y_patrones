import { Request } from "./RequestInterface";
import RequestManager from "./requestManager";

class GetRequest implements Request {
  constructor(private receiver: RequestManager, private endpoint: string) {}
  async doRequest() {
    return this.receiver.get(this.endpoint);
  }
}

class PostRequest implements Request {
  constructor(
    private receiver: RequestManager,
    private endpoint: string,
    private data: any
  ) {}
  async doRequest() {
    return this.receiver.post(this.endpoint, this.data);
  }
}

export { GetRequest, PostRequest };
