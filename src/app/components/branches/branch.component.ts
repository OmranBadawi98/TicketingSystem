import { BranchService } from './../../core/services/branch.service';
import { EditBranchDialogComponent } from './edit-branch-dialog/edit-branch-dialog.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BranColumn, BranchModel } from 'src/app/core/model/branch.model';

import { AddbranchDialogComponent } from './addbranch-dialog/addbranch-dialog.component';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-branches',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers: [BranchService],
})
export class BranchComponent implements OnInit, AfterViewInit {
  table = new MatTableDataSource<BranchModel>();
  displayedColumns = BranColumn;
  private unsubscribe = new Subject<void>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private service: BranchService) {}
  ngAfterViewInit() {
    console.log('Sort');
    // this.table.sort = this.sort;
  }
  ngOnInit(): void {
    this.service
      .getData()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((itemData) => {
        this.table.data = itemData;
        this.table.sort = this.sort;
      });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onDelete(deleted: BranchModel) {
    this.service
      .deleteItem(deleted)
      .pipe(switchMap((res) => this.service.getData()))
      .subscribe((res) => {
        this.table.data = res;
        console.log(res);
      });
  }

  openDialogShow(detail: BranchModel) {
    this.dialog.open(DetailDialogComponent, {
      data: { dataDetail: detail },
      disableClose: true,
      width: '800px',
    });
  }
  openDialogEdit(edit: BranchModel) {
    this.dialog.open(EditBranchDialogComponent, {
      disableClose: true,
      data: { dataEdit: edit },
      width: '800px',
    });
  }

  openDialogAdd() {
    const dailogref = this.dialog.open(AddbranchDialogComponent, {
      disableClose: true,
      width: '900px',
    });
    dailogref.afterClosed().subscribe((res) => {
      if (res) {
        this.service.getData().subscribe((res) => (this.table.data = res));
      }
    });
  }
}
