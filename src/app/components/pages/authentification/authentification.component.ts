import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { LoginFormComponent } from "../../shared/login-form/login-form.component";

@Component({
  selector: 'app-authentification',
  imports: [HeaderComponent, SidebarComponent, LoginFormComponent],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss'
})
export class AuthentificationComponent {
  
}
