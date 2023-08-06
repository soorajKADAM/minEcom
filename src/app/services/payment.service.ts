import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentSubject$ = new BehaviorSubject<number|null>(0)
  public balance$ = this.paymentSubject$.asObservable();

  public updateBalance(balance:number){
    const currentBalance = this.paymentSubject$.getValue();
    if(currentBalance){
      const totalBalance = currentBalance - balance;
      this.paymentSubject$.next(totalBalance);
    }
  }

  public addBalance(balance:number){
    const currentBalance = this.paymentSubject$.getValue();
    if(currentBalance!>=0){
      const totalBalance = currentBalance! + balance;
      this.paymentSubject$.next(totalBalance);
    }
  }
  constructor() { }
}
