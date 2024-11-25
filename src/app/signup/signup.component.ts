import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="signUp()">
      <input [(ngModel)]="email" name="email" placeholder="Email" required>
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required>
      <input [(ngModel)]="name" name="name" placeholder="Full Name" required>
      <button type="submit">Sign Up</button>
    </form>
  `
})
export class SignUpComponent {
  email!: string;
  password!: string;
  name!: string;

  signUp() {
    // Handle sign up logic
  }
}
