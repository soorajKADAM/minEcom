import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { OrdersComponent } from './pages/orders/orders.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PaymentComponent,
    OrdersComponent,
    ProfileComponent,
    HeaderComponent,
    OrderlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
