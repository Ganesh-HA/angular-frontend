
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(): void {
    const userData = {
      username: this.registrationForm.get('username')?.value,
      password: this.registrationForm.get('password')?.value
    };
  
    this.authService.register(userData).subscribe(
      () => {
        alert('Registration successful');
        this.registrationForm.reset();
        this.router.navigate(['/login']); // Redirect to login page after successful registration
      },
      (error: any) => {
        console.error('Registration Error:', error);
        // Handle error and show appropriate message
      }
    );
  }
  
  
}
