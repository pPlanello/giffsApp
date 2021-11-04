import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // _historial implica que la variable será expuesta con algunas propiedades
  private _historial: string[] = [];

  private apiKey: string = '7fbRE3H4u3m8mk3j7lyxQdCLmRT9W3Zj';
  private url: string = 'https://api.giphy.com/v1/gifs/search'

  constructor(private http: HttpClient) { }

  get historial() {
    // romper la referencia del por si la propiedad del historial fuera modificada
    return [...this._historial];
  }

  findGifs(query: string = '') {
  
    query = query.trim().toLocaleLowerCase();

    // No guardar repetidos
    if (!this._historial.includes(query)) {
      // insertar la inicio 
      this._historial.unshift(query);
      // Quedarse con los 10 últimos
      this._historial = this._historial.splice(0, 10);
      console.log('Guardando historial: ', this._historial);
    }

    return this.http.get(`${this.url}?api_key=${this.apiKey}&q=${this._historial[0]}`);
  }
}
