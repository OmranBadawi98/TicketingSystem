import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketsDialogComponent } from './add-tickets-dialog.component';

describe('AddTicketsDialogComponent', () => {
  let component: AddTicketsDialogComponent;
  let fixture: ComponentFixture<AddTicketsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTicketsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
