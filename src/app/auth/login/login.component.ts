import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private r: Router,
  ) {/** NOP */ }

  isLoginError = false;
  loginErrors = [];

  async onSubmit(form: NgForm) {
    if (form.status === 'VALID') {
      const { email, password } = form.value;
      const res = await this.authService.login({
        email,
        password,
      });
      res.subscribe(response => {
        if (response) {
          this.isLoginError = false;
          this.r.navigate(['/dashboard']);
        }
      }, err => {
        if (err.error && err.error.message) {
          this.isLoginError = true;
          this.loginErrors = err.error.message.map(m => {
            return m.constraints && m.constraints.matches || '';
          });
        }
      });
    }
  }

}
