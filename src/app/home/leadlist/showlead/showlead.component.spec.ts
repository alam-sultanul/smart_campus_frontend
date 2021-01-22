import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowleadComponent } from './showlead.component';

describe('ShowleadComponent', () => {
  let component: ShowleadComponent;
  let fixture: ComponentFixture<ShowleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowleadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
