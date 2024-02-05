import { Component, Input } from '@angular/core';
import { Satellite } from '../models';

@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrl: './satellite.component.css'
})
export class SatelliteComponent {
  @Input({required: true})satellite!: Satellite;
}
