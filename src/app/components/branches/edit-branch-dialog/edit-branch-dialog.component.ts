import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BranchModel } from '../../../core/model/branch.model';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-branch-dialog',
  templateUrl: './edit-branch-dialog.component.html',
  styleUrls: ['./edit-branch-dialog.component.css'],
})
export class EditBranchDialogComponent implements OnInit {
  dataEdit: BranchModel;

  constructor(
    public dialogRef: MatDialogRef<EditBranchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dataEdit = this.data.dataEdit;
    console.log(this.dataEdit);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
