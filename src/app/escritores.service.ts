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
    return new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES);
      reject('Error');
    });
  }

  getByPais(pPais: string): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES.filter(escritor => {
        return escritor.pais === pPais;
      }));
      reject('Error');
    });
  }

  getById(pId: number): Promise<Escritor> {
    return new Promise<Escritor>((resolve, reject) => {
      resolve(ESCRITORES.find(escritor => {
        return escritor.id === pId;
      }));
      reject('Error');
    });
  }
}
