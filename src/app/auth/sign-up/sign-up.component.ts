import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(
    private authService: AuthService,
    private r: Router,
  ) {}

  isSignError = false;
  signErrors = [];

  async onSubmit(form: NgForm) {
    if (form.status === 'VALID') {
      const { firstName, lastName, email, password } = form.value;
      const res = await this.authService.signUp({
        firstName,
        lastName,
        email,
        password,
      });
      res.subscribe(response => {
        if (response) {
          this.isSignError = false;
          this.r.navigate(['/dashboard']);
        }
      }, err => {
        if (err.error && err.error.message) {
          this.isSignError = true;
          this.signErrors = err.error.message.map(m => {
            return m.constraints && m.constraints.matches || '';
          });
        }
      });
    }
  }

}
