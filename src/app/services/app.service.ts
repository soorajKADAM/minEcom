import { combineLatest, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { OrdersService } from './orders.service';
import { PaymentService } from './payment.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
public customerData$ = combineLatest([
  this.paymentService.balance$,
  this.ordersService.orders$,
  this.profileService.name$
]).pipe(map(([balance,orders,name])=>({balance, orders, name})))
  constructor(
    private paymentService:PaymentService,
    private ordersService:OrdersService,
    private profileService:ProfileService
    ) { }
  balance$ = this.paymentService.balance$;
  orders$ = this.ordersService.orders$;
  name$ = this.profileService.name$

  addOrder(order:HTMLInputElement){
    if(order.value){
      this.ordersService.addOrder(order.valueAsNumber);
      this.paymentService.updateBalance(2);
    }
   }
}
