import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(username: string, password: string) {
    if (username == 'snake') {
      return password == 'solid';
    }
    if (username == 'ocelot') {
      return password == 'revolver';
    }
  }

  changePass(value: any) {
    let account = value['account'];
    let username = account['username'];
    let currentPass = account['currentpass'];
    let newPass = account['newpass'];
    let confirmNewPass = account['confirmnewpass'];
    
    console.log("Checking user details...");
    let validCreds = this.login(username, currentPass);

    if (validCreds) {
      console.log(`Updating '${username}' credentials...`);
      return true;
    } else {
      console.log("Credentials provided are invalid.");
      return false;
    }
      
  }
}
