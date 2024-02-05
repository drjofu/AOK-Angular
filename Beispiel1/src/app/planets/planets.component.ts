import { Component, OnInit } from '@angular/core';
import { Planet } from '../models';
import { Planets } from '../planetsdata';
import { PlanetsService } from '../planets.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css',
})
export class PlanetsComponent implements OnInit {
  // planets: Planet[] = Planets;

  planets: Planet[] = [];

  //planets$: Observable<Planet[]>;

  constructor(private planetsService:PlanetsService) {
    // this.planets$ = planetsService.getPlanets();
  }

  /*async*/  
  ngOnInit() {
    // in .NET: antwort = Task<Planet[]> =>  await antwort
    // Achtung: http.get ist ein Cold-Observable
    this.planetsService.getPlanets()
      .subscribe((data) => 
        (this.planets = data));


//    this.planets = await this.planetsService.getPlanets2();
  }
}
