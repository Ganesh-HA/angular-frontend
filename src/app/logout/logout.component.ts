import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router, private authService: AuthService) {
    this.logout();
  }

  logout(): void {
    // Implement your logout logic here, e.g., clearing tokens or user data.
    // After logout, navigate to the login page.
    this.authService.logout(); // Call the logout method in your AuthService if available.
    this.router.navigate(['/login']);
  }
}