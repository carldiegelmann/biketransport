import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TransportOrdersService } from "../../services/transport-orders.service";
import { NotificationService } from "../../services/notification.service";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatLabel } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDatepicker } from "@angular/material/datepicker";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { Router } from "@angular/router";

@Component({
  imports: [
    MatCardModule,
    MatInputModule,
    MatLabel,
    MatDatepickerModule,
    MatDatepicker,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
  selector: "app-order-create",
  templateUrl: "./order-create.component.html",
  styleUrls: ["./order-create.component.css"],
})
export class OrderCreateComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: TransportOrdersService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      customer: ["", Validators.required],
      startLocation: ["", Validators.required],
      destination: ["", Validators.required],
      motorcycleType: [""],
      transportDate: ["", Validators.required],
    });
  }

  saveOrder(): void {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe(
        (response) => {
          console.log("Order created successfully", response);
          this.notificationService.showNotification(
            "Order has been saved successfully!",
            "Close"
          );
          this.router.navigate(["/list-orders"]);
        },
        (error) => {
          console.error("Error creating order", error);
          this.notificationService.showNotification(
            "Failed to save order. Please try again.",
            "Close"
          );
        }
      );
    }
  }
}
