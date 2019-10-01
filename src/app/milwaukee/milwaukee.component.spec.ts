import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilwaukeeComponent } from './milwaukee.component';

describe('MilwaukeeComponent', () => {
  let component: MilwaukeeComponent;
  let fixture: ComponentFixture<MilwaukeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilwaukeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilwaukeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
