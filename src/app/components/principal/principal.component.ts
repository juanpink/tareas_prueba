import { Component } from '@angular/core';
import { TareasComponent } from '../tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../classes/tarea';
import { CommonModule } from '@angular/common';
import { CreditosComponent } from '../creditos/creditos.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [TareasComponent, FormsModule, CommonModule, CreditosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  nombreTarea : string = "";
  criticidad : string = "Baja";
  tareas : Array<Tarea> = new Array();

  crear() {
    console.log("Creando tarea...");
    let tarea = new Tarea(this.nombreTarea, this.criticidad);
    this.tareas.push(tarea);

    this.nombreTarea = "";
    this.criticidad = "Baja";
  }
}
