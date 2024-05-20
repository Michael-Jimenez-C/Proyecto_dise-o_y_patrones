import { AxiosResponse } from "axios";

interface Request {
  doRequest(): Promise<AxiosResponse<any, any>>;
}

export type { Request };
