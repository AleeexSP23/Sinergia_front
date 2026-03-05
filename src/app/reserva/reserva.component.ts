import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from '../services/reserva.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {

  date: string= "";
  hora: string = "";
  personas: number = 1;
  horasDisponibles: string[] = ["14:00", "15:30", "20:00", "21:30"]

  private reservationService = inject(ReservationService);

  onSubmit() {

    const fechaCompleta = new Date(`${this.date}T${this.hora}`);

     const data = {
    date: fechaCompleta,
    personas: this.personas
  };

  console.log(data);

    this.reservationService.createReservation(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Reserva creada correctamente');
        },
        error: (err) => {
          console.error(err);
          alert('Error al crear reserva');
        }
      });
  }
}
