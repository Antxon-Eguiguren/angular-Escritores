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

  getByName(pString: string): Promise<Escritor[]> {
    const prom = new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES.filter(escritor => {
        const nombreCompleto = this.eliminarDiacriticos(this.eliminarEspacios(escritor.nombre + escritor.apellidos));
        const pStringNew = this.eliminarDiacriticos(this.eliminarEspacios(pString));
        return nombreCompleto.toLowerCase().includes(pStringNew.toLowerCase());
      }));
      reject('Error');
    });
    return prom;
  }

  eliminarEspacios(pCadena: string): string {
    const regex = / /g;
    return pCadena.replace(regex, '');
  }

  eliminarDiacriticos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
