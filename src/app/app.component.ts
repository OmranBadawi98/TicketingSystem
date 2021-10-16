import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  login: string = 'login';
  logout: string = 'logout';
  control = new FormControl();
  streets: string[] = [
    'Champs-Élysées',
    'Lombard Street',
    'Abbey Road',
    'Fifth Avenue',
  ];
  filteredStreets: Observable<string[]>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // this.isLoggedIn = false;
    this.auth.getUser();
    this.auth.isLoggedIn.subscribe((res) => (this.isLoggedIn = res));
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  logoutnow() {
    console.log('LogOut');
    this.auth.logout();
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter((street) =>
      this._normalizeValue(street).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  title = 'ticketing-Dashboard';
}
