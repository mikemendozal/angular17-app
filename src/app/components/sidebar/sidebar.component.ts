import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarClosed = true;

  constructor(private authService: AuthService, private router: Router, private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$.subscribe(isOpen => {
      this.isSidebarClosed = !isOpen;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    console.log('Sidebar state:', this.isSidebarClosed ? 'Closed' : 'Opened');
  }
  
  logout() {
   this.authService.logout();
   this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    return this.authService.isAuth();
  }
}
