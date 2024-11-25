import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [FormsModule],
  template: `<button (click)="logout()">Logout</button>`
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
