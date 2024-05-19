import ServiceInterface from "../ServiceInterface";
import RealOrganizationService from "./OrganizationRealService";


export default class OrganizationProxyService implements ServiceInterface {
    private realOrganizationService: RealOrganizationService;

    constructor() {
        this.realOrganizationService = new RealOrganizationService();
    }

    getById(organizationId: number) {
        const Organization = this.realOrganizationService.getById(organizationId);
        return Organization;
    }
}