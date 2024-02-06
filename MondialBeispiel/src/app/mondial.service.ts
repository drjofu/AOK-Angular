import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Continent, Country } from './models';

@Injectable({
  providedIn: 'root',
})
export class MondialService {
  baseUrl = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {}

  getContinents() {
    return this.httpClient.get<Continent[]>(`${this.baseUrl}continents`);
  }

  getContinentById(continentId:number) {
    return this.httpClient.get<Continent>(`${this.baseUrl}continents/${continentId}`);
  }


  getCountriesByContinentId(continentId: number){
    // console.log('get countries for ' + continentId);
    return this.httpClient.get<Country[]>(`${this.baseUrl}countries?continentId=${continentId}`);
  }
}
