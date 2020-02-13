import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../libros.service';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  arrLibros: Libro[];

  constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(async params => {
      this.arrLibros = await this.librosService.getById(parseInt(params.id, 10));
    });
  }

}
