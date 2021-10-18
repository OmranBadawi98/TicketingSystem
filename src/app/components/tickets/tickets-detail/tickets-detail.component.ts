import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TicketsService } from '../../../core/services/tickets.service';
@Component({
  selector: 'app-tickets-detail',
  templateUrl: './tickets-detail.component.html',
  styleUrls: ['./tickets-detail.component.css'],
})
export class TicketsDetailComponent implements OnInit {
  form: FormGroup;
  destinations = ['Technical Support', 'Data Base', 'Network', 'System'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: TicketsService,
    private auth: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(4)]],
      redirection: ['', [Validators.required]],
      from: ['Technical Support'],
      to: ['', [Validators.required]],
      issue: ['', [Validators.required]],
    });
    // this.activatedRoute.params
    //   .pipe(switchMap((params) => this.auth.getById(params['id'])))
    //   .subscribe((res) => console.log('returned result'));
    // this.activatedRoute.params.pipe().subscribe((res) => console.log(res));
    // this.activatedRoute.fragment.pipe().subscribe((res) => console.log(res));
  }

  labelPosition: 'No' | 'Yes' = 'Yes';
  checked = false;
  disabled = false;
  isShown: boolean = false; // hidden by default
  toggleShow() {
    this.isShown = true;
  }
  toggleShow2() {
    this.isShown = false;
  }
  editItem() {
    console.log('in Edit');
    // this.form.get('redirection').valueChanges.subscribe((val) => {
    if (this.isShown) {
      console.log('You put Yes');
      this.service.addItem(this.form.value).subscribe((res) => {
        console.log('Edited By Omran', res);
      });
    }
    // this.service
    //   .doneItem(this.form.get('description')?.value)
    //   .subscribe((res) => {
    //     console.log('Edited By Omran', res);
    //   });
    else console.log('You put No ');
  }
  onAdd() {
    console.log(this.form.value);
  }
}
