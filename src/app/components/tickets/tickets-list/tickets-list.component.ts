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
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { merge, Subscription } from 'rxjs';

import { Columns } from '../../../core/model/ticket.model';
import { MatDialog } from '@angular/material/dialog';
import { delay, startWith, switchMap, map } from 'rxjs/operators';
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
  // isLoadding = new Subject<boolean>();
  displayedColumns = Columns;
  panelOpenState = false;
  dataSource = new MatTableDataSource<TicketModel>();
  selection = new SelectionModel<TicketModel>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private service: TicketsService,
    private cdr: ChangeDetectorRef
  ) {
    // this.isLoadding.next(true);
  }
  ngAfterViewInit() {
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
  }

  ngOnInit() {
    this.busy = this.service
      .getData()
      .pipe(delay(500))
      .subscribe((itemData) => {
        //  this.isLoadding.next(false);
        this.dataSource.data = itemData;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  test: boolean;
  chacked: boolean = false;
  openDialogASkSure(row: TicketModel) {
    let dialogRef = this.dialog.open(AskSureComponent, {
      disableClose: true,
      width: '500px',
      data: { row: row.done },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.test = true;
      } else this.test = false;
      // this.service.addItem(res).subscribe((res) => {
      //   if (res.done == res.done) {
      //     console.log('true');
      //   } else console.log('false');
      // });
      // if (res) {
      //   this.service.getData().subscribe((res) => {
      //     this.dataSource.data = res;
      //     this.dataSource.paginator = this.paginator;
      //     this.dataSource.sort = this.sort;
      //   });
      // }
    });
  }
  openDialogAdd() {
    const dailogref = this.dialog.open(AddTicketsDialogComponent, {
      disableClose: true,
      width: '500px',
    });
    dailogref.afterClosed().subscribe((res) => {
      if (res) {
        this.service.getData().subscribe((res) => (this.dataSource.data = res));
      }
    });
  }

  public isChecked;
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
}
