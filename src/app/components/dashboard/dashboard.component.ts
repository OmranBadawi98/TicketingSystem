import { delay, takeUntil } from 'rxjs/operators';
import { TicketsService } from './../../core/services/tickets.service';
import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/core/services/branch.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  private unsubscribe = new Subject<void>();

  constructor(
    private serviceBranch: BranchService,
    private serviceTicket: TicketsService
  ) {}
  allBranches: number;
  allTickets: number;

  ngOnInit() {
    this.serviceBranch
      .getData()
      .pipe(delay(300), takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.allBranches = res.length;
      });
    this.serviceTicket.getData().subscribe((res) => {
      this.allTickets = res.length;
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
