import { Routes } from "@angular/router";
import { OrderCreateComponent } from "../app/components/add-order/order-create.component";
import { MaterialTableComponent } from "../app/components/order-list/material-table.component";
import { ChangeOrderStatusComponent } from "./components/status-change/change-order-status.component";

export const routes: Routes = [
  { path: "list-orders", component: MaterialTableComponent },
  { path: "create-order", component: OrderCreateComponent },
  { path: "change-status", component: ChangeOrderStatusComponent },
];
