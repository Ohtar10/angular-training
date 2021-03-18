import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.css']
})
export class PassResetComponent{

  authService = new AuthenticationService();

  form = new FormGroup({
    'account': new FormGroup({
      'username': new FormControl('', Validators.required),
      'currentpass': new FormControl('', Validators.required),
      'newpass': new FormControl('', Validators.required),
      'confirmnewpass': new FormControl('', Validators.required)
    },
    PasswordValidators.passwordsShouldMatch)
  })

  login() {
    let isValid = this.authService.changePass(this.form.value);
    if (!isValid) {
      this.form.setErrors({
        'invalidData': true
      })
    }
  }

  get username() {
    return this.form.get('account.username');
  }

  get currentpass() {
    return this.form.get('account.currentpass');
  }

  get newpass() {
    return this.form.get('account.newpass');
  }

  get confirmnewpass() {
    return this.form.get('account.confirmnewpass');
  }

  get account() {
    return this.form.get('account');
  }

}
