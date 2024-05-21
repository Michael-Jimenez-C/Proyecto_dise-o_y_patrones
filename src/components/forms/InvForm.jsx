import FormTemplate from "./FormTemplate";

export default class InvForm extends FormTemplate{
    constructor(){
        super();
    }
    render(){
        this.reset()
        this.add("Nombre")
        this.add("Ubicación")
        return (<>{this.get()}</>)
    }
}