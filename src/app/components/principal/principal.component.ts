import { Component } from '@angular/core';
import { TareasComponent } from '../tareas/tareas.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [TareasComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
