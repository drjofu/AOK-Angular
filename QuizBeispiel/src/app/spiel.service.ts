import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Aufgabe } from './aufgabe';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpielService {
  baseUrl = 'http://localhost:3000/';
  httpClient = inject(HttpClient);

  aktuellerSchwierigkeitsgrad = signal(0);
  aktuelleAufgabe = signal<Aufgabe | undefined>(undefined);
  spielende = signal(false);
  erreichterSg = signal(0);
  gewinnstufen = signal<number[]>([]);

  gewinn = computed(() => this.gewinnstufen()[this.erreichterSg()]);

  constructor() {
    effect(() => console.log(this.aktuelleAufgabe()));
  }

  init() {
    this.httpClient
      .get<number[]>(`${this.baseUrl}gewinnstufen`)
      .pipe(
        map((gs) => this.gewinnstufen.set([0, ...gs])),
        catchError((e) => this.handleError(e))
      )
      .subscribe();
    this.aufgabeAuslosen();
  }

  aufgabeAuslosen() {
    let url = `${this.baseUrl}aufgaben?sg=${
      this.aktuellerSchwierigkeitsgrad() + 1
    }`;
    this.httpClient.get<Aufgabe[]>(url).subscribe((aufgaben) => {
      let n = aufgaben.length;
      let index = Math.floor(Math.random() * n);
      this.aktuelleAufgabe.set(aufgaben[index]);
    });
  }

  handleError(e: any): any {
    console.log('Problem beim Laden der Daten');
  }
}
