import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Module
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import {MatSlideToggle} from '@angular/material/slide-toggle';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);


// Row Data Interface
interface IRow {    
  id: number;
  firstname: string;
  lastname: string;
  department: string;
  role: string;
  email: string;
  status: string;
  phone: string;
  hireDate: string;
}


@Component({  
  selector: 'app-list-employees',
  standalone: true,
  imports: [AgGridAngular, MatSlideToggle],
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent {
  rowData: IRow[] = [
    { id: 1000001, firstname: 'Jane', lastname: 'Doe', department: 'Engineering', role: 'Developer', email: 'jane.doe@staffhub.com', status: 'Active', phone: '555-0123', hireDate: '2024-01-15' },
    { id: 1000002, firstname: 'John', lastname: 'Smith', department: 'Marketing', role: 'Manager', email: 'john.smith@staffhub.com', status: 'Active', phone: '555-0456', hireDate: '2023-11-04' },
    { id: 1000003, firstname: 'Emily', lastname: 'Chen', department: 'HR', role: 'Specialist', email: 'emily.chen@staffhub.com', status: 'On Leave', phone: '555-0789', hireDate: '2022-06-20' },
    { id: 1000004, firstname: 'Michael', lastname: 'Brown', department: 'Finance', role: 'Analyst', email: 'michael.brown@staffhub.com', status: 'Active', phone: '555-1011', hireDate: '2021-09-12' },
    { id: 1000005, firstname: 'Ava', lastname: 'Patel', department: 'Engineering', role: 'QA Engineer', email: 'ava.patel@staffhub.com', status: 'Active', phone: '555-1213', hireDate: '2024-02-28' },
    { id: 1000006, firstname: 'Noah', lastname: 'Garcia', department: 'Sales', role: 'Representative', email: 'noah.garcia@staffhub.com', status: 'Active', phone: '555-1415', hireDate: '2023-05-03' },
    { id: 1000007, firstname: 'Sophia', lastname: 'Lee', department: 'Design', role: 'UX Designer', email: 'sophia.lee@staffhub.com', status: 'Active', phone: '555-1617', hireDate: '2022-12-01' },
    { id: 1000008, firstname: 'Liam', lastname: 'Nguyen', department: 'Operations', role: 'Coordinator', email: 'liam.nguyen@staffhub.com', status: 'Active', phone: '555-1819', hireDate: '2023-08-19' },
    { id: 1000009, firstname: 'Olivia', lastname: 'Martinez', department: 'Customer Success', role: 'Specialist', email: 'olivia.martinez@staffhub.com', status: 'Active', phone: '555-2021', hireDate: '2024-03-10' },
    { id: 1000010, firstname: 'Ethan', lastname: 'Kim', department: 'Engineering', role: 'DevOps Engineer', email: 'ethan.kim@staffhub.com', status: 'Active', phone: '555-2223', hireDate: '2023-01-22' },
    { id: 1000011, firstname: 'Mia', lastname: 'Davis', department: 'HR', role: 'Recruiter', email: 'mia.davis@staffhub.com', status: 'Active', phone: '555-2425', hireDate: '2024-04-05' },
    { id: 1000012, firstname: 'William', lastname: 'Wilson', department: 'Marketing', role: 'Content Strategist', email: 'william.wilson@staffhub.com', status: 'Active', phone: '555-2627', hireDate: '2022-10-28' },
    { id: 1000013, firstname: 'Isabella', lastname: 'Lopez', department: 'Sales', role: 'Account Executive', email: 'isabella.lopez@staffhub.com', status: 'Active', phone: '555-2829', hireDate: '2023-07-09' },
    { id: 1000014, firstname: 'James', lastname: 'Clark', department: 'Finance', role: 'Controller', email: 'james.clark@staffhub.com', status: 'Active', phone: '555-3031', hireDate: '2021-03-14' },
    { id: 1000015, firstname: 'Charlotte', lastname: 'Walker', department: 'Engineering', role: 'Product Manager', email: 'charlotte.walker@staffhub.com', status: 'Active', phone: '555-3233', hireDate: '2024-05-02' }
  ];

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef<IRow>[] = [
        { field: "id", width: 150 },
        { field: "firstname", width: 150 },
        { field: "lastname", width: 150 },
        { field: "department", width: 150 },
        { field: "role", width: 150 },
        { field: "email", width: 150 },
        { field: "status", width: 150 },
        { field: "phone", width: 150 },
        { field: "hireDate", width: 150 }
    ];

    defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    sortable: true, 
  };

}
