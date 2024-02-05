import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet } from './models';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private httpClient: HttpClient) {}

  getPlanets() {
    return this.httpClient.get<Planet[]>('/assets/Planets.json');
  }

  getPlanets2() {
    return lastValueFrom(this.httpClient.get<Planet[]>('/assets/Planets.json'));
  }
}
