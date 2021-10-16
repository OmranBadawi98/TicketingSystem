import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean>;
  login(user: string, password: string): Observable<boolean> {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      // this.isLoggedIn.next(true);
      return of<boolean>(true);
    }
    // this.isLoggedIn.next(false);
    return of<boolean>(false);
  }

  logout(): any {
    this.isLoggedIn.next(false);
    localStorage.removeItem('username');
  }

  getUser() {
    let store = localStorage.getItem('username');
    if (store) {
      this.isLoggedIn.next(true);
    } else this.isLoggedIn.next(false);

    // this.isLoggedIn = localStorage.getItem('username');
    // let a = this.isLoggedIn.subscribe((res) => {
    //   localStorage.getItem('username');
    //   this.isLoggedIn.next(res);
    // });
    // return 'Good';
    // console.log(localStorage.getItem('username'));
    // return localStorage.getItem('username');
  }

  constructor() {
    this.isLoggedIn = new BehaviorSubject(false);
  }
}
export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService },
];
