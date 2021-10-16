import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BranchService } from 'src/app/core/services/branch.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: BranchService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

  // submit() {
  //   console.log(this.form.value);
  // if (this.form.valid) {
  //   this.service.addItem(this.form.value).subscribe((res) => {
  //     console.log('Form Submitted!', res);
  //   });
  // }
}
