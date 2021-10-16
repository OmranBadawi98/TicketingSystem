import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from 'src/app/core/services/branch.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: string;
  form: FormGroup;
  isLoggedIn: boolean = false;
  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private service: BranchService,
    private router: Router
  ) {
    this.message = '';
  }

  ngOnInit(): void {
    // console.log('inside ngOnInit login');
    // this.isLoggedIn = this.auth.isLoggedIn.value
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]],
    });
  }
  login(username: string, password: string) {
    this.auth.login(username, password).subscribe((res) => {
      if (res) {
        this.auth.getUser();
        // this.isLoggedIn = !!this.auth.getUser();
        this.router.navigateByUrl('/dashboard');
      } else this.message = 'Credintial Error';
    });
  }

  logout() {
    console.log('LogOut');
    this.auth.logout();
    // this.isLoggedIn = !!this.auth.getUser();
  }

  // submit() {
  //   console.log(this.form.value);
  // }
}
