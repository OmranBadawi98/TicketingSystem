import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbranchDialogComponent } from './addbranch-dialog.component';

describe('AddbranchDialogComponent', () => {
  let component: AddbranchDialogComponent;
  let fixture: ComponentFixture<AddbranchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbranchDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbranchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
