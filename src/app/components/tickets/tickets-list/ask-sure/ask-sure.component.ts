import { TicketModel } from './../../../../core/model/ticket.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketsService } from '../../../../core/services/tickets.service';

@Component({
  selector: 'app-ask-sure',
  templateUrl: './ask-sure.component.html',
  styleUrls: ['./ask-sure.component.css'],
})
export class AskSureComponent implements OnInit {
  row: any;
  ask: boolean = true;

  constructor(
    private service: TicketsService,
    public dialogRef: MatDialogRef<AskSureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  submit() {
    // this.data = this.ask;
    this.dialogRef.close(true);
    // console.log(this.data);
    // this.service.doneItem(this.data).subscribe((res) => {
    //   if (res) {
    //     this.dialogRef.close(this.data);
    //   }
    // });
    // this.ask = true;
    // this.service.doneItem(this.ask).subscribe((res) => {
    //   this.dialogRef.close(this.ask);
    //   console.log(this.ask);
    // });
    // console.log(this.ask);
    // if (this.form.valid) {
    //   this.service.addItem(this.form.value).subscribe((res) => {
    //     this.dialogRef.close(this.form.value);
    //     console.log('Form Submitted!', res);
    //   });
    // }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
