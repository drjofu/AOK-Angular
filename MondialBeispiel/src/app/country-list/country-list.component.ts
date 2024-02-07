import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MondialService } from '../mondial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Continent, Country } from '../models';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent implements OnInit {
  countries?: Country[];
  continent?: Continent;


  constructor(
    private mondialService: MondialService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let continentId = params['continentId'];
      this.mondialService
        .getCountriesByContinentId(continentId)
        .subscribe((countries) => {
          this.countries = countries;
        });

      this.mondialService
        .getContinentById(continentId)
        .subscribe((continent) => (this.continent = continent));
    });
  }

  
}
