import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { NavigationExtras, Router, RouterLink } from "@angular/router";

import { AuthService } from "../shared/auth.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.minLength(4),
      ]),
      password: new FormControl("", [Validators.required]),
    });
  }

  onClickLogin(): void {
    if (this.loginForm.valid) {
      console.log("Form submitted with:", this.loginForm.value);
    }
    let redirectUrl = "";

    this.authService
      .loginValidate(
        this.loginForm.value.username,
        this.loginForm.value.password,
      )
      .subscribe((resp) => {
        console.log("Login response:", resp);
        if (resp.login) {
          console.log(resp, "if");

          this.authService.isLoggedIn = true;
          redirectUrl = "/dashboard";
        } else {
          redirectUrl = "/login";
        }

        this.router.navigate([redirectUrl]);
      });

  }
}
