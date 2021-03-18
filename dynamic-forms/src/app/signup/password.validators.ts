import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static mustContainSpecialCharacters(control: AbstractControl): ValidationErrors | null {
        let value = control.value as string;
        let regexp = new RegExp('.*[@#$%*()-_\s]+.*');
        if (!regexp.test(value))
            return {'mustContainSpecialCharacters': true};
        return null;
    }

    static mustContainCustomCharacters(regex: string, description: string): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl) => {
            let value = control.value as string;
            let regexp = new RegExp(regex);
            if (!regexp.test(value))
                return {'mustContainSpecialCharacters': {
                    'specialCharacters': description
                }};
            return null;
        }
    }
}