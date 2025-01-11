import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialTableComponent } from './components/order-list/material-table.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    /* deine Komponenten */
  ],
  imports: [
    // andere Module
    HttpClient,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MaterialTableComponent,
    MatSnackBarModule, // SnackBar-Modul
  ],
  bootstrap: [
    /* Hauptkomponente */
  ],
})
export class AppModule {}
