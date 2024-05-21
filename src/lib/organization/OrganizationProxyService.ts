import ServiceInterface from "../ServiceInterface";
import RealOrganizationService from "./OrganizationRealService";


export default class OrganizationProxyService implements ServiceInterface {
    private realOrganizationService: RealOrganizationService;

    constructor() {
        this.realOrganizationService = new RealOrganizationService();
    }

    create(){
        const newOrganization = this.realOrganizationService.create();
        return newOrganization;
    }
    
    getAll() {
        const OrganizationList = this.realOrganizationService.getAll();
        return OrganizationList;
    }

    update(){
        const updateResponse = this.realOrganizationService.update();
        return updateResponse;
    }

    delete(){
        const deleteResponse = this.realOrganizationService.update();
        return deleteResponse;
    }
}