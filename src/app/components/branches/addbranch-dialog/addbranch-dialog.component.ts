import { MatTableDataSource } from '@angular/material/table';
import { BranchService } from './../../../core/services/branch.service';
import { BranchModel } from '../../../core/model/branch.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addbranch-dialog',
  templateUrl: './addbranch-dialog.component.html',
  styleUrls: ['./addbranch-dialog.component.css'],
})
export class AddbranchDialogComponent implements OnInit {
  form: FormGroup;
  table = new MatTableDataSource<BranchModel>();

  constructor(
    private fb: FormBuilder,
    private service: BranchService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddbranchDialogComponent>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      ip: ['', [Validators.required]],
      countPc: ['', [Validators.required]],
      receiptPrinter: ['', [Validators.required]],
      barcode: ['', [Validators.required]],
      psSader: ['', [Validators.required]],
      psWared: ['', [Validators.required]],
      detail: ['', [Validators.required]],
      note: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.form.valid) {
      this.service.addItem(this.form.value).subscribe((res) => {
        this.dialogRef.close(this.form.value);
        console.log('Form Submitted!', res);
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
