import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean>;
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(private router: Router) {
    this.isLoggedIn = new BehaviorSubject(false);
  }

  login(user: string, password: string): Observable<boolean> {
    if (user === 'user' && password === '123') {
      localStorage.setItem('username', user);
      setInterval(() => {
        this.isLoggedIn.next(false);
        localStorage.removeItem('username');
        this.router.navigateByUrl('/login');
      }, 900000);
      return of<boolean>(true);
    }

    return of<boolean>(false);
  }

  logout() {
    this.isLoggedIn.next(false);
    localStorage.removeItem('username');
  }
  getUser() {
    let store = localStorage.getItem('username');
    if (store) {
      this.isLoggedIn.next(true);
    } else this.isLoggedIn.next(false);
  }
}
export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService },
];
