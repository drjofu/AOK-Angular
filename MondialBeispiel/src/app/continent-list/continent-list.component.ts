import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Continent } from '../models';
import { MondialService } from '../mondial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrl: './continent-list.component.css',
})
export class ContinentListComponent implements OnInit {
  
  @Input()showButtonSet1 : boolean = true;
  @Output() continentSelected = new EventEmitter<Continent>();

  continents?: Continent[];

  constructor(private mondialService: MondialService,
     private router: Router,
     private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.mondialService
      .getContinents()
      .subscribe((continents) => (this.continents = continents));
  }

  showCountries(continentId: number) {
    this.router.navigate(['/countries', continentId]);
  }
  
  showCountries2(continentId: number) {
    this.router.navigate(['countries', continentId], {
      relativeTo: this.activatedRoute
    });
  }

  selectContinent(continent : Continent){
    this.continentSelected.emit(continent);
  }
}
