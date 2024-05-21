import { AxiosResponse } from "axios";

export default interface ServiceInterface {
    create(): Promise<any>
    getAll(): Promise<any>
    update(id: number): Promise<any>
    delete(id: number): Promise<any>
}

