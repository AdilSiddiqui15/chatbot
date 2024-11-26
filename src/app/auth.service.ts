import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated: boolean = false;
  private mockUser = { email: 'user@example.com', password: 'password123' };

  constructor(private router: Router) {}
  private users: any[] = [];
  
  register(userData: any): Observable<any> {
    this.users.push(userData); // Save user to mock DB
    return of({ success: true, message: 'User registered successfully' });
  }
  
  login(email: string, password: string): boolean {
    if (email === this.mockUser.email && password === this.mockUser.password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
