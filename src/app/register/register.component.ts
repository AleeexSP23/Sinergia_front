import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  nombre = '';
  correo = '';
  password = '';

  onSubmit() {
    this.authService.register({
      nombre: this.nombre,
      correo: this.correo,
      password: this.password
    })
    .subscribe({
      next: (response) => {
        console.log(response);
        console.log("Usuario registrado correctamente");

        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
