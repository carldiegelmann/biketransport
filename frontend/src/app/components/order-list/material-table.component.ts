import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { TransportOrdersService } from '../../services/transport-orders.service';

@Component({
  selector: 'app-material-table',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css'],
})
export class MaterialTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'startLocation',
    'destination',
    'transportDate',
    'fee',
  ];
  dataSource: any[] = [];

  constructor(private dataService: TransportOrdersService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.dataSource = data; // update data
      },
      error: (error) => {
        console.error('Error loading order data:', error);
      },
    });
  }
}
