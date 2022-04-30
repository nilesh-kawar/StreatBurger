import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingDetailsComponent } from './Dashboard/billing-details/billing-details.component';
import { CameraComponent } from './Dashboard/camera/camera.component';
import { TableDetailsComponent } from './Dashboard/table-details/table-details.component';
import { TableStatusComponent } from './Dashboard/table-status/table-status.component';
import { BillComponent } from './MyComponents/bill/bill.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MenuComponent } from './MyComponents/menu/menu.component';
import { PaymentComponent } from './MyComponents/payment/payment.component';
import { SuccessComponent } from './MyComponents/success/success.component';
import { ThankYouComponent } from './MyComponents/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'bill', component: BillComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'thank-you', component: ThankYouComponent },

  { path: 'table-details', component: TableDetailsComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'billing-details', component: BillingDetailsComponent },
  { path: 'table-status', component: TableStatusComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
