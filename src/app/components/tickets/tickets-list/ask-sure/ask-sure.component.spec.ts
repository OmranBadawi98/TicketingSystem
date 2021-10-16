import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskSureComponent } from './ask-sure.component';

describe('AskSureComponent', () => {
  let component: AskSureComponent;
  let fixture: ComponentFixture<AskSureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskSureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
