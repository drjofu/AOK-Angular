import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SpielService } from '../spiel.service';
import { SpielstandComponent } from '../spielstand/spielstand.component';
import { GewinnComponent } from '../gewinn/gewinn.component';
import { AufgabeComponent } from '../aufgabe/aufgabe.component';

@Component({
  selector: 'app-spiel',
  standalone: true,
  imports: [SpielstandComponent, GewinnComponent, AufgabeComponent],
  templateUrl: './spiel.component.html',
  styleUrl: './spiel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpielComponent implements OnInit {
  spielService = inject(SpielService);
  
  get spielende() {
    return this.spielService.spielende.asReadonly();
  }

  ngOnInit(): void {
    this.spielService.init();
  }

}
