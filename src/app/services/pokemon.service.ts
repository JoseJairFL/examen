import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPokemonResponse } from '../components/interfaces/ipokemonResponse';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Obtiene pokemon
  getPokemons(index: number):Promise<IPokemonResponse[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}/pokemon?limit=${index}`).subscribe(
        res => {
          const response = res as any;;
        resolve(response.results);
        },
        err => {
          reject(err);
        }
      )
    });
  }

}