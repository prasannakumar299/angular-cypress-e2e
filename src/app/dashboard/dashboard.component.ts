import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentsTableComponent } from '../students-table/students-table.component';
import { StudentRecordsComponent } from "../student-records/student-records.component";
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ChatComponent } from '../web-socket/components/chat/chat.component';
import { AllChartsComponent } from '../charts/all-charts/all-charts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTabsModule,
    StudentsTableComponent,
    StudentRecordsComponent,
    ContactUsComponent,ChatComponent,AllChartsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
}
