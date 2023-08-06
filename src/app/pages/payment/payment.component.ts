import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(private paymentService:PaymentService,private orderService:OrdersService){
  }
balance$ = this.paymentService.balance$;
orders$ = this.orderService.orders$;
addBalance(balance:HTMLInputElement){
  console.log(balance.valueAsNumber);
  if(isNaN(balance.valueAsNumber)){
    this.paymentService.addBalance(0);
  }else{
    this.paymentService.addBalance(balance.valueAsNumber);
  }
}
}
