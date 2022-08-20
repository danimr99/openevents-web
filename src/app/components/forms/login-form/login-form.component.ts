import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  hidePassword: boolean = true

  constructor (private formBuilder: FormBuilder) { }

  ngOnInit (): void {
    // Initialize login form group
    this.loginForm = this.formBuilder.group(
      {
        'email': '',
        'password': ''
      }
    )

    // Subscribe to changes of login form group
    this.loginForm.valueChanges.subscribe((changes) => {
      console.log(changes)
    })
  }

  togglePasswordVisibility (): void {
    this.hidePassword = !this.hidePassword
  }

}
