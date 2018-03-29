import { Directive } from "@angular/core";
import { NG_VALIDATORS,Validator,AbstractControl } from "@angular/forms";

@Directive({
    selector: '[formValidate]'
})
export class FormValidate implements Validator{
    validate(control: AbstractControl): {[key: string]: any} {
        return null;
    }
    constructor(private abstractControl: AbstractControl){

    }
    getValue() : string {
        console.log(this.abstractControl.status);
        return this.abstractControl.status;
    }
    
}