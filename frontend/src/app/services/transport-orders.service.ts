import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TransportOrdersService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/api/orders`); // Rückgabe eines Observable mit Array von Objekten
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/api/orders`, order);
  }

  updateOrderStatus(orderId: number, status: number): Observable<any> {
    return this.http.patch(
      `${this.apiBaseUrl}/api/orders/${orderId}/status`,
      null,
      {
        params: { status: status },
      }
    );
  }
}
