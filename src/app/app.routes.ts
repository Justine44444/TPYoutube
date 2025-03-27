import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthentificationComponent } from './components/pages/authentification/authentification.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'connexion', component: AuthentificationComponent}
];
