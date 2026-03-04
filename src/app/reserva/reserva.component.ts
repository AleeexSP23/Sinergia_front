import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../services/reserva.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {

  fecha: string = '';
  personas: number = 1;

  private reservationService = inject(ReservationService);

  onSubmit() {

    const data = {
      fecha: new Date(this.fecha),
      personas: this.personas
    };

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
