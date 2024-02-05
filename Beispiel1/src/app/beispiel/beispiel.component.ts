import { Component } from '@angular/core';

@Component({
  selector: 'app-beispiel',
  templateUrl: './beispiel.component.html',
  styleUrl: './beispiel.component.css',
})
export class BeispielComponent {
  info: string = 'nur zur Info';
  zahl = 1234;
  fs = '40px';

  // text?: string;
  text: string | undefined;

  buttonClick() {
    // let t = 'irgendwas';
    // this.info = t + ' anderes';

    this.info = `die Zahl ist ${this.zahl}, text: ${this.info}`;
    this.text = 'anderer Text';
  }
}
