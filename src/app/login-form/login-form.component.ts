import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(private loginService: LoginService, private dialog: MatDialog) { 
    this.form = new FormGroup({
      username: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required ]),
      token: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]{4}$") ])
    });

  }

  ngOnInit(): void { }

  onSubmit() {
    this.loginService
      .login(this.form.value)
      .subscribe(
        () => {
          console.log("Login succeeded");
          window.location.href = "http://onecause.com";
        },
        error => {
          console.error("Login error");
          this.dialog.open(LoginDialogComponent);
        }); 
  }
}
