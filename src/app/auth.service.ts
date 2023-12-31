
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';
  
  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userData);
  }

  
  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, null);
  }

  sendResetEmail(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/send-reset-email`, userData);
  }
}
