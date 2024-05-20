import ServiceInterface from "../ServiceInterface";
import RealOrganizationService from "./OrganizationRealService";


export default class OrganizationProxyService implements ServiceInterface {
    private realOrganizationService: RealOrganizationService;

    constructor() {
        this.realOrganizationService = new RealOrganizationService();
    }

    getAll() {
        const Organization = this.realOrganizationService.getAll();
        return Organization;
    }
}