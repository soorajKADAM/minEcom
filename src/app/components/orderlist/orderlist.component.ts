import { AppService } from 'src/app/services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent {
  constructor(private appService:AppService){}
  orderinfo$ = this.appService.customerData$;
}
