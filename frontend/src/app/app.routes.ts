import { Routes } from '@angular/router';
import { OrderCreateComponent } from '../app/components/add-order/order-create.component';
import { MaterialTableComponent } from '../app/components/order-list/material-table.component';

export const routes: Routes = [
  { path: 'list-orders', component: MaterialTableComponent },
  { path: 'create-order', component: OrderCreateComponent },
];
