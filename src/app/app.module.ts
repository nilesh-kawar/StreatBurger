import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './MyComponents/menu/menu.component';
import { BillComponent } from './MyComponents/bill/bill.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { PaymentComponent } from './MyComponents/payment/payment.component';
import { SuccessComponent } from './MyComponents/success/success.component';
import { ThankYouComponent } from './MyComponents/thank-you/thank-you.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CameraComponent } from './Dashboard/camera/camera.component';
import { TableDetailsComponent } from './Dashboard/table-details/table-details.component';
import { BillingDetailsComponent } from './Dashboard/billing-details/billing-details.component';
import {WebcamModule} from 'ngx-webcam';
import { TableStatusComponent } from './Dashboard/table-status/table-status.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BillComponent,
    HomeComponent,
    PaymentComponent,
    SuccessComponent,
    ThankYouComponent,
    CameraComponent,
    TableDetailsComponent,
    BillingDetailsComponent,
    TableStatusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
