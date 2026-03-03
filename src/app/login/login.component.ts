import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private authService = inject(AuthService);

  email = signal('');
  password = signal('');

  onSubmit() {
    this.authService.login(this.email(), this.password())
      .subscribe({
        next: (response: any) => {
          console.log(response);

          // Guardar token
          localStorage.setItem('token', response.message.token);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}