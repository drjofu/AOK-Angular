import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SpielService } from '../spiel.service';

@Component({
  selector: 'app-gewinn',
  standalone: true,
  imports: [],
  templateUrl: './gewinn.component.html',
  styleUrl: './gewinn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GewinnComponent {
  spielService = inject(SpielService);
  gewinn = this.spielService.gewinn;
}
