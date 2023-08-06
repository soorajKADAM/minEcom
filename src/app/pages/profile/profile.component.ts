import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private profileService:ProfileService,private ordersService:OrdersService,private paymentService:PaymentService){
  }
  name$ = this.profileService.name$;
  balance$ = this.paymentService.balance$;
  orders$ = this.ordersService.orders$

  save(name:string){
    this.profileService.getName(name);
  }
}
