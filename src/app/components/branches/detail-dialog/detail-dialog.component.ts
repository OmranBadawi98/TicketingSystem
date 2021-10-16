import { Component, OnInit, Inject } from '@angular/core';

import { BranchModel } from 'src/app/core/model/branch.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css'],
})
export class DetailDialogComponent implements OnInit {
  dataDetail: BranchModel;

  constructor(
    public dialogRef: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dataDetail = this.data.dataDetail;
    console.log(this.dataDetail);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
