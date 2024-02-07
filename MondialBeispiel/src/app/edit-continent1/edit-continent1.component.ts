import { Component, OnInit, ViewChild } from '@angular/core';
import { MondialService } from '../mondial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Continent } from '../models';
import { CanDeactivateForm } from '../helper';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-continent1',
  templateUrl: './edit-continent1.component.html',
  styleUrl: './edit-continent1.component.css',
})
export class EditContinent1Component implements OnInit, CanDeactivateForm {
  continent?: Continent;
  cancelled = false;

  @ViewChild('f', { static: true }) public f!: NgForm;

  constructor(
    private mondialService: MondialService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let continentId = params['continentId'];
      this.mondialService
        .getContinentById(continentId)
        .subscribe((continent) => (this.continent = continent));
    });
  }

  save() {
    this.mondialService
      .updateContinent(this.continent!)
      .subscribe((continent) => {
        this.router.navigate(['']);
      });
  }

  cancel() {
    this.cancelled=true;
    this.router.navigate(['']);
  }

  canDeactivate(): boolean {
    return this.f.submitted || this.f.pristine || this.cancelled;
  }
}
