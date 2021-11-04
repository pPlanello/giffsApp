import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gif, GIFSearch } from '../models/gifsSearch.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  gifSearch: EventEmitter<string> = new EventEmitter();

  // _historial implica que la variable será expuesta con algunas propiedades
  private _historial: string[] = [];
  public gifs: Gif[] = [];

  private apiKey: string = '7fbRE3H4u3m8mk3j7lyxQdCLmRT9W3Zj';
  private url: string = 'https://api.giphy.com/v1'

  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  get historial() {
    // romper la referencia del por si la propiedad del historial fuera modificada
    return [...this._historial];
  }

  findGifs(query: string = ''): Observable<Array<GIFSearch>> {
  
    query = query.trim().toLocaleLowerCase();

    const params = new HttpParams().set('api_key', this.apiKey).set('limit', 10).set('q', query)

    return this.http.get<Array<GIFSearch>>(`${this.url}/gifs/search`, {params: params});
  }

  saveHistory(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    // No guardar repetidos
    if (!this._historial.includes(query)) {
      // insertar la inicio 
      this._historial.unshift(query);
      // Quedarse con los 10 últimos
      this._historial = this._historial.splice(0, 10);
      // Guardar en el local storage
      localStorage.setItem('historial', JSON.stringify(this._historial));
      console.log('Guardando historial: ', this._historial);
    }
  }

  saveGifs(gifsSearch: Gif[]) {
    this.gifs = gifsSearch;
  }
}
