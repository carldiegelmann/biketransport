import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransportOrdersService {
  private apiUrl = 'http://localhost:8080/api/orders'; // Ersetze durch deine API-URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Rückgabe eines Observable mit Array von Objekten
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }
}
