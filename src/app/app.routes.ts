import { Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
            }
        ]
    }
];
