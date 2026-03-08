import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onSubmit() {
    this.authService.login(this.email(), this.password())
      .subscribe({
        next: (response: any) => {
          console.log(response);
          localStorage.setItem('token', response.message.token);
          localStorage.setItem('role', response.message.user.role);
          console.log("Login exitoso");
          alert("Logeado correctamente");
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error(error);
          alert("Error de login")
        }
      });
  }
}