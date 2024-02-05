import { Component, Input } from '@angular/core';
import { Satellite } from '../models';

@Component({
  selector: 'app-satellite-list',
  templateUrl: './satellite-list.component.html',
  styleUrl: './satellite-list.component.css',
})
export class SatelliteListComponent {
  @Input({ required: true }) satellites?: Satellite[];
}
