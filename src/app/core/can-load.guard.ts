import { AuthService } from 'src/app/core/services/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanLoadGuard implements CanLoad {
  isLoggedIn: boolean = false;
  constructor(private auth: AuthService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.auth.isLoggedIn.subscribe((res) => (this.isLoggedIn = res));
    if (this.isLoggedIn) {
      return true;
    } else this.router.navigateByUrl('/login');
    return false;
  }
}
