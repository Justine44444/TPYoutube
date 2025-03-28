import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../shared/register-form/register-form.component";
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent, SidebarComponent, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
}
