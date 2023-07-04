import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor(private http: HttpClient) { }

  getAllPokemons(){
    return this.http.get(this.url);
  }
}
