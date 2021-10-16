import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsDetailComponent } from './tickets-detail/tickets-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddTicketsDialogComponent } from './tickets-list/add-tickets-dialog/add-tickets-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { AskSureComponent } from './tickets-list/ask-sure/ask-sure.component';
@NgModule({
  declarations: [
    TicketsComponent,
    TicketsListComponent,
    TicketsDetailComponent,
    AddTicketsDialogComponent,
    AskSureComponent,
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class TicketsModule {}
