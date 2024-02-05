import { Component } from '@angular/core';
import { Planet } from '../models';
import { Planets } from '../planetsdata';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {
  planets: Planet[] = Planets;
  
}
