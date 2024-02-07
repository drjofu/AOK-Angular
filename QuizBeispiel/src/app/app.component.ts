import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpielComponent } from './spiel/spiel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpielComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
}
