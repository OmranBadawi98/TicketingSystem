import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsDetailComponent } from './tickets-detail/tickets-detail.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: TicketsListComponent },
      { path: 'detail/:id', component: TicketsDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
