import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditleadComponent } from './addeditlead.component';

describe('AddeditleadComponent', () => {
  let component: AddeditleadComponent;
  let fixture: ComponentFixture<AddeditleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditleadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
