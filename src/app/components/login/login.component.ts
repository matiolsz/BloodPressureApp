import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  router = inject(Router);

  constructor(private authService: AuthService) {}

  async onSubmit() {
    this.errorMessage = '';

    try {
      await this.authService.login(this.email, this.password);
      console.log('Logged in successfully!');
      this.router.navigate(['/dashboard']);

    } catch (error) {
      console.error('Login failed:', error);
      this.errorMessage = 'Invalid email or password. Please try again.'; // Set error message
    }
  }

  async redirectToSignUp() {
    try {
      this.router.navigate(['/signup']);
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  }
}