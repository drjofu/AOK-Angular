import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SpielService } from '../spiel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aufgabe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aufgabe.component.html',
  styleUrl: './aufgabe.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AufgabeComponent {
  buchstabe: string | undefined;
  spielService = inject(SpielService);
  aufgabe = this.spielService.aktuelleAufgabe;

  antworten() {
    this.spielService.antwortPruefen(this.buchstabe);
    this.buchstabe = undefined;
  }

  aufgeben() {
    this.spielService.aufgeben();
    this.buchstabe = undefined;
  }

}
