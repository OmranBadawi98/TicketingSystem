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
  ngAfterViewInit() {
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
  }

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
  // change(item) {
  //   console.log(item, 'this is item in Change');

  //   this.service.changeStatus(item).subscribe((res) => {
  //     // this.dataSource.data = item;
  //     console.log(res, 'this is res in subscribe in change');
  //   });
  // }
  checkboxLabel(row?: TicketModel) {
    // if (!row) {
    //   return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    // }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
    //   row.id + 1
    // }`;
  }
  // this.isChecked = true;
  // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
  //   row.id + 1
  // }`;

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
