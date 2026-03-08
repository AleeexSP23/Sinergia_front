import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from '../services/reserva.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css',
})
export class ReservaComponent implements OnInit {
  date: string = '';
  hora: string = '';
  personas: number = 1;
  horasDisponibles: string[] = ['14:00', '15:30', '20:00', '21:30'];
  horariosOcupados: any = {};
  reservas: any[] = [];

  private reservationService = inject(ReservationService);

  isLogged(): boolean {
  return !!localStorage.getItem('token');
}

isAdmin(): boolean {
  return localStorage.getItem('role') === 'admin';
}


  loadReservations() {
    this.reservationService.getReservations().subscribe({
      next: async (res) => {
        console.log('Reservas:', res);
        this.reservas = [...res.reservations];
        
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  eliminarReserva(id: string) {
  if (!confirm("¿Seguro que quieres eliminar esta reserva?")) return;

  this.reservationService.deleteReserva(id).subscribe({
    next: () => {
      this.reservas = this.reservas.filter(r => r._id !== id);
      alert("Reserva eliminada correctamente");
    },
    error: (err) => {
      console.error(err);
      alert("Error al eliminar la reserva");
    }
  });
}

  ngOnInit() {

  const token = localStorage.getItem('token');

  if(token){
    this.loadReservations();
  }

}
  onDateChange() {
    if (!this.date) return;

    this.reservationService.getAvailability(this.date).subscribe({
      next: (res) => {
        console.log('Disponibilidad:', res);
        this.horariosOcupados = res.horarios;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onSubmit() {
    const fechaCompleta = new Date(`${this.date}T${this.hora}`);

    const data = {
      date: fechaCompleta,
      personas: this.personas,
    };

    console.log(data);

     if (!this.isLogged()) {
    alert("Debes iniciar sesión para hacer una reserva");
    return;
  }

    this.reservationService.createReservation(data).subscribe({
      next: (res) => {
        console.log(res);
        alert('Reserva creada correctamente');
        this.loadReservations();
      },
      error: (err) => {
        console.error(err);
        const mensaje = err.error?.message || 'Error al crear reserva';

        alert(mensaje);
      },
    });
  }
}
