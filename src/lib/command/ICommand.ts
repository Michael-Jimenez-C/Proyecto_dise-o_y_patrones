import RequestManager from "../requestManager";

interface Request {
  doRequest(): Promise<any>;
}

class GetRequest implements Request {
  constructor(private receiver: RequestManager, private endpoint: string) {}
  async doRequest() {
    const result = this.receiver.get(this.endpoint);
    return result;
  }
}

export type { Request };
export { GetRequest };
