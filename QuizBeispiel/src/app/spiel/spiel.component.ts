import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SpielService } from '../spiel.service';

@Component({
  selector: 'app-spiel',
  standalone: true,
  imports: [],
  templateUrl: './spiel.component.html',
  styleUrl: './spiel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpielComponent implements OnInit {
  spielService = inject(SpielService);

  ngOnInit(): void {
    this.spielService.init();
  }

}
