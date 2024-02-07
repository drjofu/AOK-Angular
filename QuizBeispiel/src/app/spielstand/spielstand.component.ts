import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SpielService } from '../spiel.service';

@Component({
  selector: 'app-spielstand',
  standalone: true,
  imports: [],
  templateUrl: './spielstand.component.html',
  styleUrl: './spielstand.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpielstandComponent {
  spielService = inject(SpielService);
  erreichterSchwierigkeitsgrad = this.spielService.erreichterSg.asReadonly();
  gewinnstufen = this.spielService.gewinnstufen.asReadonly();
}
