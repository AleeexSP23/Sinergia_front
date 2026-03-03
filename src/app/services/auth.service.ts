import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private API_URL = 'http://localhost:3000/user';

  login(email: string, password: string) {
    return this.http.post(`${this.API_URL}/login`, {
      email,
      password
    });
  }

  register(data: any) {
    return this.http.post(`${this.API_URL}/register`, data);
  }
}
