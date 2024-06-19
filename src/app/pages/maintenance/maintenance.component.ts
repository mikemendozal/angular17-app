import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

}
