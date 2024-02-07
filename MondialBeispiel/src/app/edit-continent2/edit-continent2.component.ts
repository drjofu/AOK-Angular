import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MondialService } from '../mondial.service';
import { Continent } from '../models';
import { CanDeactivateForm } from '../helper';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-continent2',
  templateUrl: './edit-continent2.component.html',
  styleUrl: './edit-continent2.component.css',
})
export class EditContinent2Component implements OnInit, CanDeactivateForm {
  continent?: Continent;
  cancelled = false;
  saved = false;
  continentForm?: any;

  constructor(
    private mondialService: MondialService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  evenNumber(x: FormControl) {
    return x.value % 2 != 0 ? { notEven: { value: x.value } } : null;
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let continentId = params['continentId'];
      this.mondialService
        .getContinentById(continentId)
        .subscribe((continent) => {
          this.continent = continent;

          this.continentForm = this.fb.group({
            name: [continent.name, Validators.required],
            area: [
              continent.area,
              [Validators.min(1000), Validators.max(100000000000), this.evenNumber],
            ],
          });
        });
    });
  }

  save() {
    let newValue = { ...this.continent, ...this.continentForm?.value };
    this.mondialService.updateContinent(newValue).subscribe((continent) => {
      this.saved = true;
      this.router.navigate(['']);
    });
  }

  cancel() {
    this.cancelled = true;
    this.router.navigate(['']);
  }

  canDeactivate(): boolean {
    return this.cancelled || this.continentForm?.pristine || this.saved;
  }
}
