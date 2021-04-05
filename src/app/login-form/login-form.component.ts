import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;

  constructor(private loginService: LoginService) { 
    this.form = new FormGroup({
      username: new FormControl('c137@onecause.com', [ Validators.required, Validators.email ]),
      password: new FormControl('#th@nH@rm#y#r!$100%D0p#', [ Validators.required ]),
      token: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]{4}$") ])
    });

  }

  ngOnInit(): void { }

  onSubmit() {
    this.loginInvalid = false;

    this.loginService
      .login(this.form.value)
      .subscribe(
        ()=>{
          console.log("Login succeeded");
          window.location.href = "http://onecause.com";
        },
        error => {
          console.error("Login error");
          this.loginInvalid = true;
        }); 
  }
}
