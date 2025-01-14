import { Component, Input } from '@angular/core';
import { Tarea } from '../../classes/tarea';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  @Input() tarea : Tarea | undefined;
}
