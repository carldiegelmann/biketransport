import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root", // Automatische Bereitstellung des Services im gesamten Modul
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // duration in milliseconds
      verticalPosition: "top", // position: 'top' or 'bottom'
      horizontalPosition: "center", // position: 'start', 'center', 'end', 'left' or 'right'
    });
  }
}
