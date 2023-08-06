import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { OrdersComponent } from './pages/orders/orders.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
   component:HomeComponent,
   path:''
  },
  {
   component:PaymentComponent,
   path:'payment'
   },
   {
    component:OrdersComponent,
    path:'orders'
   },
   {
    component:ProfileComponent,
    path:'profile'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
