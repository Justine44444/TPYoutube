import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthentificationComponent } from './components/pages/authentification/authentification.component';
import { RegisterComponent } from './components/pages/register/register.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'connexion', component: AuthentificationComponent},
    {path: 'register', component: RegisterComponent}
];
