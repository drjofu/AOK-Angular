import { Component, Input } from '@angular/core';
import { Measurement } from '../models';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrl: './measurement.component.css',
})
export class MeasurementComponent {
  @Input({ required: true }) measurement!: Measurement;
}
