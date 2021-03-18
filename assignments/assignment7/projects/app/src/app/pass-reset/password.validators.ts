import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
        let newPass = control.get('newpass');
        let confirmNewPass = control.get('confirmnewpass');

        if (newPass.value !== confirmNewPass.value)
            return {passwordsShouldMatch: true};
        
        return null;
    }
}