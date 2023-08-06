import { AppService } from 'src/app/services/app.service';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(private appService:AppService,private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer){
  this.matIconRegistry.addSvgIcon(
    "cart",
     this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/cart.svg")
  );
  this.matIconRegistry.addSvgIcon(
    "dollar",
     this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/cash.svg")
  );
  this.matIconRegistry.addSvgIcon(
    "profile",
     this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/user.svg")
  );
}
customerData$ = this.appService.customerData$
}
