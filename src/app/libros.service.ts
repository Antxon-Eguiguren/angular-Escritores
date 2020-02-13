import { Injectable } from '@angular/core';
import { Libro } from './models/libro.model';
import { LIBROS } from './db/libros.db';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getById(pId: number): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      resolve(LIBROS.filter(libro => {
        return libro.escritor === pId;
      }));
      reject('Error');
    });
  }
}
