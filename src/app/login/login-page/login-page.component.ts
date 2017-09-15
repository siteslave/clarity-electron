import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { LoginService } from '../login.service';
import { AlertService } from '../../alert.service';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  jwtHelper: JwtHelper = new JwtHelper();
  isLogging = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit() {
  }

  enterLogin(event) {
    // enter login
    if (event.keyCode === 13) {
      this.doLogin();
    }
  }

  doLogin() {
    this.isLogging = true;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0OTIxNTIxNTAsImV4cCI6MTUyMzY4ODE1MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImZpcnN0bmFtZSI6IkpvaG5ueSIsImxhc3RuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.PHIh0fVzpbTqi8h74stfts_CqgEmku-j0NV5G1iS0BI'
    
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('fullname', 'Satit Rianpit');
    this.isLogging = false;
    //redirect to admin module
    this.router.navigate(['admin']);

    // this.loginService.testLogin(this.username, this.password)
    //   .then((token: string) => {
    //     const decodedToken = this.jwtHelper.decodeToken(token);
    //     const fullname = `${decodedToken.firstname} ${decodedToken.lastname}`;

    //     sessionStorage.setItem('token', token);
    //     sessionStorage.setItem('fullname', fullname);
    //     // hide spinner
    //     this.isLogging = false;
    //     // redirect to admin module
    //     this.router.navigate(['admin']);
    //   })
    //   .catch((error) => {
    //     this.isLogging = false;
    //     this.alert.error(JSON.stringify(error));
    //   });
  }
}
