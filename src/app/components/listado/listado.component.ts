import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', edad: 12 },
    { id: 2, nombre: 'Paulino', apellido: 'Ramirez', edad: 19 },
    { id: 3, nombre: 'Paco', apellido: 'Gomez', edad: 11 },
    { id: 4, nombre: 'Pedro', apellido: 'Martinez', edad: 20 }
  ]

  dataSource = this.alumnos
  displayedColumns: string[] = ['id', 'nombre completo', 'edad'];
}

