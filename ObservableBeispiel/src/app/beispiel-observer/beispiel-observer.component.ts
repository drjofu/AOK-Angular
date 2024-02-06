import { Component, OnDestroy, inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NumberService } from '../number.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beispiel-observer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beispiel-observer.component.html',
  styleUrl: './beispiel-observer.component.css',
})
export class BeispielObserverComponent implements OnDestroy {
  nCold$ = new Subject<number>();
  nHot$ = new Subject<number>();

  numberService = inject(NumberService);
  subscriptions: Subscription[] = [];

  startObserveCold() {
    this.numberService.coldObservable$.subscribe((k) => this.nCold$.next(k));

    // this.numberService.coldObservable$.subscribe({
    //   next:n=>{},
    //   complete: ()=>{},
    //   error:()=>{}
    // })
  }

  startObserveHot() {
    this.subscriptions.push(
     this.numberService.hotObervable$.subscribe((k) => this.nHot$.next(k)));
  }

  ngOnDestroy(): void {
    for(let subscription of this.subscriptions){
      subscription.unsubscribe();
    }
  }

}
