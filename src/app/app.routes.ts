import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'carta', component: CartaComponent },
  { path: '**', redirectTo: '' }
];
