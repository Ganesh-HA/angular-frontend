
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username !: string;
  password !: string;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    const user = { username: this.username, password: this.password };
    this.authService.login(user).subscribe(
      () => {
        alert('Login successful');
        this.router.navigate(['/employees']); // Navigate to employees list
      },
      (error) => {
        if (error.status === 401) {
          alert('Invalid username or password');
        } else {
          alert('An error occurred. Please try again later.'); // Handle other errors
        }
      }
    );
  }
  
}

