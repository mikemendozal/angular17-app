import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: 'home', component: DashboardComponent, canActivate: [authGuard]},
    {path: '**', component: NotFoundComponent}

];
