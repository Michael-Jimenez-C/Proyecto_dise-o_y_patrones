import ServiceInterface from "../ServiceInterface";
interface Props {
    name: String; 
    workspace: String;
    image: String  
}

export default class RealOrganizationService implements ServiceInterface{
    async getById(organizationId: number){
        const organizationImg = await fetch('https://picsum.photos/id/237/200/300')
        .then(response => {
            if(response.status !== 200){
                console.error('Hubo un problema: ' + response.status)
                return;
            }
            return response.json()
        })
        .then(data => data.drinks[0])
        .catch(err => console.error(`Fetch error: ${err}`));
        return {
            name: "PicOrg",
            workspace: "First",
            image: organizationImg
        }; 
    }
}

