import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrl: './validation-messages.component.css'
})
export class ValidationMessagesComponent {
  @Input()control!: FormControl;
}
