import { TicketsService } from '../../../../core/services/tickets.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-tickets-dialog',
  templateUrl: './add-tickets-dialog.component.html',
  styleUrls: ['./add-tickets-dialog.component.css'],
})
export class AddTicketsDialogComponent implements OnInit {
  form: FormGroup;
  destinations: string[] = [];
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: TicketsService,
    public dialogRef: MatDialogRef<AddTicketsDialogComponent>
  ) {}

  ngOnInit() {
    this.destinations = ['Technical Support', 'Data Base', 'Network', 'System'];

    this.form = this.fb.group({
      issue: ['', [Validators.required]],
      description: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
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
