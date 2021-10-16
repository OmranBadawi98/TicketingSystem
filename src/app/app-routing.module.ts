import { CanActivateGuard } from './core/can-activate.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./components/tickets/tickets.module').then(
        (m) => m.TicketsModule
      ),
    canActivate: [CanActivateGuard],
  },
  {
    path: 'branches',
    loadChildren: () =>
      import('./components/branches/branch.module').then((m) => m.BranchModule),
    canActivate: [CanActivateGuard],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
