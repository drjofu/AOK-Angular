import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  private numberSubject$ = new BehaviorSubject<number>(100);
  numbers$ = this.numberSubject$
    .asObservable()
    .pipe(tap((n) => console.log('number: ' + n)));

  newNumber() {
    let k = Math.floor(Math.random() * 100);
    this.numberSubject$.next(k); //this.numberSubject$.complete()
  }
  constructor() {
    let i=0;
    setInterval(()=>{
      console.log('hot observable: ' + i);
      this.hotObservableSubject$.next(i++);
    },1000);
  }

  coldObservable$ = new Observable<number>(observer=>{
    let i = 0;
    let id = setInterval(()=>{
      console.log('cold observable: ' + i);
      observer.next(i++);
      if(i>10){
        observer.complete();
        clearInterval(id);
      }
    }, 1000);
  });

  private hotObservableSubject$ = new Subject<number>();
  hotObervable$=this.hotObservableSubject$.asObservable();

}
