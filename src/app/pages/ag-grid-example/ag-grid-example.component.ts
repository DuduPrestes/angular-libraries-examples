import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-grid-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid-example.component.html',
  styleUrls: ['./ag-grid-example.component.css']
})
export class AGGridExampleComponent {
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'id', width: 150, filter: 'agNumberColumnFilter' },
    { field: 'name', headerName: 'Name', width: 150, filter: 'agTextColumnFilter' },
    { field: 'age', headerName: 'Age', width: 150, filter: 'agNumberColumnFilter' },
    { field: 'country', headerName: 'Country', width: 150, filter: 'agSetColumnFilter' }
  ];

  rowData = [
    { id: 1, name: 'Carlos Silva', age: 30, country: 'Brazil' },
    { id: 2, name: 'Francisco Santos', age: 25, country: 'Portugal' },
    { id: 3, name: 'Alejandro Gómez', age: 35, country: 'Spain' },
    { id: 4, name: 'Martín Rodríguez', age: 28, country: 'Argentina' },
    { id: 5, name: 'James Smith', age: 40, country: 'United States' },
    { id: 6, name: 'Johann Müller', age: 32, country: 'Germany' },
    { id: 7, name: 'Liam O’Connor', age: 27, country: 'Canada' },
    { id: 8, name: 'Hiroshi Tanaka', age: 29, country: 'Japan' },
    { id: 9, name: 'Sipho Ndlovu', age: 38, country: 'South Africa' },
    { id: 10, name: 'Jack Wilson', age: 26, country: 'Australia' },
    { id: 11, name: 'José Hernández', age: 30, country: 'Mexico' },
    { id: 12, name: 'Rahul Sharma', age: 28, country: 'India' },
    { id: 13, name: 'João Pereira', age: 35, country: 'Brazil' },
    { id: 14, name: 'Oliver Brown', age: 32, country: 'United Kingdom' },
    { id: 15, name: 'Pierre Dubois', age: 40, country: 'France' },
    { id: 16, name: 'Wei Zhang', age: 25, country: 'China' },
    { id: 17, name: 'Giovanni Rossi', age: 27, country: 'Italy' },
    { id: 18, name: 'Dmitry Ivanov', age: 29, country: 'Russia' },
    { id: 19, name: 'Min-jun Kim', age: 38, country: 'South Korea' },
    { id: 20, name: 'Omar Mahmoud', age: 26, country: 'Egypt' }
  ];
}
