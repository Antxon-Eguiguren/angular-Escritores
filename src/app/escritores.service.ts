import { Injectable } from '@angular/core';
import { Escritor } from './models/escritor.model';
import { ESCRITORES } from './db/escritores.db';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() {
  }

  getAll(): Promise<Escritor[]> {
    const prom = new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES);
      reject('Error');
    });
    return prom;
  }
}
