import { TicketsService } from './../../core/services/tickets.service';
import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/core/services/branch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private serviceBranch: BranchService,
    private serviceTicket: TicketsService
  ) {}
  allBranches: number;
  allTickets: number;
  ngOnInit() {
    this.serviceBranch.getData().subscribe((res) => {
      this.allBranches = res.length;
    });
    this.serviceTicket.getData().subscribe((res) => {
      this.allTickets = res.length;
    });
  }
}
