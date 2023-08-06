import { AppService } from 'src/app/services/app.service';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
 constructor(private appService:AppService){
 }

 orderinfo$ = this.appService.customerData$;
addOrder(order:HTMLInputElement){
  this.appService.addOrder(order)
}
}
