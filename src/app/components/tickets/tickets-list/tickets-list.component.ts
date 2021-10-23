import { TicketModel } from './../../../core/model/ticket.model';
import { AddTicketsDialogComponent } from './add-tickets-dialog/add-tickets-dialog.component';
import { TicketsService } from '../../../core/services/tickets.service';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Columns } from '../../../core/model/ticket.model';
import { MatDialog } from '@angular/material/dialog';
import { delay, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { AskSureComponent } from './ask-sure/ask-sure.component';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsListComponent implements OnInit, AfterViewInit {
  busy: Subscription;
  displayedColumns = Columns;
  panelOpenState = false;
  dataSource = new MatTableDataSource<TicketModel>();
  selection = new SelectionModel<TicketModel>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private unsubscribe = new Subject<void>();

  constructor(public dialog: MatDialog, private service: TicketsService) {}
  chacked: boolean = false;
  ngAfterViewInit() {}

  ngOnInit() {
    this.busy = this.service
      .getData()
      .pipe(delay(500), takeUntil(this.unsubscribe))
      .subscribe((itemData) => {
        this.dataSource.data = itemData;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  openDialogASkSure(row: TicketModel) {
    row;
    let dialogRef = this.dialog.open(AskSureComponent, {
      disableClose: true,
      width: '500px',
      data: { row: row.done },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.service
          .getData()
          .pipe(takeUntil(this.unsubscribe))
          .subscribe((itemData) => {
            this.dataSource.data = itemData;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
      });
  }
  openDialogAdd() {
    const dailogref = this.dialog.open(AddTicketsDialogComponent, {
      disableClose: true,
      width: '500px',
    });
    dailogref
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        if (res) {
          this.service
            .getData()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((res) => (this.dataSource.data = res));
        }
      });
  }

  checkboxLabel(row?: TicketModel) {}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
