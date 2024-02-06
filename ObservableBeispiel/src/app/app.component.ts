import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberService } from './number.service';
import { CommonModule } from '@angular/common';
import { Subscription, debounce, filter, interval, map } from 'rxjs';
import { BeispielObserverComponent } from './beispiel-observer/beispiel-observer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BeispielObserverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  k?: number;

  numbers$ = this.numberService.numbers$.pipe(filter((n) => n > 50));
  private numberSubscription?: Subscription;

  constructor(public numberService: NumberService) {}
  ngOnInit(): void {
    this.numberSubscription = this.numberService.numbers$
      .pipe(
        filter((n) => n > 50),
        map((n) => n * 1000),
        debounce((n) => interval(1000))
      )
      .subscribe((n) => (this.k = n));
  }

  ngOnDestroy(): void {
    this.numberSubscription?.unsubscribe();
  }

  newNumber() {
    this.numberService.newNumber();
  }
}
