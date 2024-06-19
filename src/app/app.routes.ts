import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

export const routes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: '' , component: LoginComponent},
    {path: 'home', component: DashboardComponent, canActivate: [authGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
    {path: 'maintenance', component: MaintenanceComponent, canActivate: [authGuard]},
    {path: '**', component: NotFoundComponent}

];
