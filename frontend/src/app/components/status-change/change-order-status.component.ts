import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatLabel } from "@angular/material/input";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TransportOrdersService } from "../../services/transport-orders.service";
import { Router } from "@angular/router";
import { NotificationService } from "../../services/notification.service";

@Component({
  imports: [
    CommonModule,
    MatLabel,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [MatSnackBarModule],
  selector: "app-change-order-status",
  templateUrl: "./change-order-status.component.html",
  styleUrls: ["./change-order-status.component.css"],
})
export class ChangeOrderStatusComponent implements OnInit {
  statusForm!: FormGroup;
  statuses: string[] = ["PENDING", "CONFIRMED", "COMPLETED"]; // Enum-Statuswerte

  constructor(
    private orderService: TransportOrdersService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.statusForm = this.fb.group({
      orderId: ["", [Validators.required, Validators.min(1)]],
      status: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.statusForm.valid) {
      const { orderId, status } = this.statusForm.value;

      this.orderService.updateOrderStatus(orderId, status).subscribe(
        (response) => {
          console.log("Order created successfully", response);
          this.notificationService.showNotification(
            "Order status updated successfully!",
            "Close"
          );
          this.router.navigate(["/list-orders"]);
        },
        (error) => {
          console.error("Error creating order", error);
          this.notificationService.showNotification(
            "Failed to update order status. Please try again.",
            "Close"
          );
        }
      );
    }
  }
}
