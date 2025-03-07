import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule,MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    email: string = '';
    password: string = '';
    username: string = '';
    errorMessage: string = '';
    router = inject(Router);
  
    constructor(private authService: AuthService) {}
  
  async onSignUp() {
    try {
      await this.authService.register(this.email, this.password);
      await this.authService.setUserName(this.username);
      console.log('Signed up successfully!');
    
      await this.authService.login(this.email, this.password);
      console.log('Logged in successfully after sign-up!');

      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Sign up failed:', error);
      this.errorMessage = 'There is an account with this email. Please try login or use different email.'; 
    }
  }

  async redirectToLogin(){
    try {
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('redirection failed:', error);
    }
  }
}
