import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-escritores',
  templateUrl: './escritores.component.html',
  styleUrls: ['./escritores.component.css']
})
export class EscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) {
    this.arrEscritores = [];
  }

  async ngOnInit() {
    this.arrEscritores = await this.escritoresService.getAll();
  }

  async manejarFiltroPais($event) {
    if ($event.target.value === 'todos' || $event.target.value === '') {
      this.arrEscritores = await this.escritoresService.getAll();
    } else {
      this.arrEscritores = await this.escritoresService.getByPais($event.target.value);
    }
  }

  async manejarFiltroNombre($event) {
    this.arrEscritores = await this.escritoresService.getByName($event.target.value);
  }

}
