import { Component } from '@angular/core';
import { Continent } from '../models';

@Component({
  selector: 'app-world1',
  templateUrl: './world1.component.html',
  styleUrl: './world1.component.css'
})
export class World1Component {

  continentSelected(continent: Continent){
    alert('Continent: ' + continent.name);
  }
}
