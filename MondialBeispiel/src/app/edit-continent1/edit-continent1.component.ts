import { Component } from '@angular/core';
import { MondialService } from '../mondial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-continent1',
  templateUrl: './edit-continent1.component.html',
  styleUrl: './edit-continent1.component.css'
})
export class EditContinent1Component {

  constructor(
    private mondialService:MondialService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

    
}
