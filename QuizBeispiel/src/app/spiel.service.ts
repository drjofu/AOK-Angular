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
  gewinnstufen = signal<number[]>([
    0, 50, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000,
    125000, 500000, 1000000,
  ]);

  gewinn = computed(() => this.gewinnstufen()[this.erreichterSg()]);

  constructor() {
    effect(() => console.log(this.aktuelleAufgabe()));
  }

  init() {
    // this.httpClient
    //   .get<number[]>(`${this.baseUrl}gewinnstufen`)
    //   .pipe(
    //     map((gs) => this.gewinnstufen.set([0, ...gs])),
    //     catchError((e) => this.handleError(e))
    //   )
    //   .subscribe();
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

  antwortPruefen(antwort?: string) {
    if (this.spielende()) return;

    if (antwort == undefined || !this.aktuelleAufgabe) {
      alert('keine Auswahl getroffen');
      return;
    }
    let auswahl = antwort.toUpperCase();

    if (auswahl != this.aktuelleAufgabe()!.loesung) {
      // falsche Antwort
      this.spielende.set(true);
      this.erreichterSg.update((eSg) => {
        if (eSg < 5) return 0;
        else if (eSg < 10) return 5;
        else return 10;
      });
      return;
    }

    // Antwort richtig
    this.aktuellerSchwierigkeitsgrad.update((n) => n + 1);
    this.erreichterSg.set(this.aktuellerSchwierigkeitsgrad());
    if (this.aktuellerSchwierigkeitsgrad() == 15) {
      this.spielende.set(true);
      return;
    }

    this.aufgabeAuslosen();
  }

  aufgeben() {
    this.spielende.set(true);
  }
}
