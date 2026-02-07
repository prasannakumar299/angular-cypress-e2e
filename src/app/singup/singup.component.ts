import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormsModule, ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss'
})
export class SingupComponent implements OnInit {
signupForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
     this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
            });
  };

  onClickToRegister(): void {
    let redirectUrl: string;
    console.log('Form submitted with:', this.signupForm.value);
    this.authService.signUpUser(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe(
			(resp) => {
				if (resp.isCreated) {
					 redirectUrl = '/login';
				}
        else{
					 redirectUrl = '/signup';
        }
					this.router.navigate([redirectUrl]);
			}
		);
  }

}
