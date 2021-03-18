import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { PasswordValidators } from './password.validators';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  authService = new AuthenticationService();

  form = new FormGroup({
    'account': new FormGroup({
        // The first parameter is just an initial state/value that can be ignored
      'username': new FormControl('', [Validators.required, Validators.minLength(3)], UsernameValidators.shouldBeUnique),
      // 'password': new FormControl('', [Validators.required, Validators.minLength(8), PasswordValidators.mustContainSpecialCharacters])
      'password': new FormControl('', [Validators.required, Validators.minLength(8), PasswordValidators.mustContainCustomCharacters('.*[@#$%\s]+.*', '@, #, $, % or spaces')])
    })
  });

  login(){
    let isValid = this.authService.login(this.form.value);
    if (!isValid){
      this.form.setErrors({
        'invalidLogin': true
      })
    }
  }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

}
