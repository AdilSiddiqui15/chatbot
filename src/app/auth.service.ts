import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated: boolean = false;
  private mockUser = { email: 'user@example.com', password: 'password123' };

  constructor(private router: Router) {}

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
