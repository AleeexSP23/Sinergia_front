import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private http = inject(HttpClient);
  private API = 'http://localhost:3000/reservations';

  createReservation(data: any) {
    return this.http.post(this.API, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  getAvailability(date: string) {
    return this.http.get<any>(`${this.API}/availability/${date}`);
  }

  getReservations() {
    return this.http.get<any>('http://localhost:3000/reservations', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  deleteReserva(id: string) {
  return this.http.delete(`${this.API}/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
}
}
