import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.status === 'VALID') {
      const { firstName, lastName, email, password } = form.value;
      console.log(`${ firstName } / ${ lastName } / ${ email } / ${ password }`);
    }
  }

}
