import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservaComponent } from './reserva/reserva.component';

export const routes: Routes = [
    {
        path:'',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path:'register',
                component:RegisterComponent
            },
            {
                path:'reservation',
                component:ReservaComponent
            }
        ]
    }
];
