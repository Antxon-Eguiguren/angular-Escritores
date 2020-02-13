import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  escritor: Escritor;
  mostrar: boolean;

  constructor(private escritoresService: EscritoresService, private activatedRoute: ActivatedRoute) {
    this.mostrar = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.escritor = await this.escritoresService.getById(parseInt(params.id, 10));
    });
  }

  manejarToogle() {
    if (this.mostrar) {
      this.mostrar = !this.mostrar;
    } else {
      this.mostrar = !this.mostrar;
    }
    return this.mostrar;
  }

}
