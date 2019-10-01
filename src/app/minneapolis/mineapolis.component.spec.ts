import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinneapolisComponent } from './minneapolis.component';

describe('MinneapolisComponent', () => {
  let component: MinneapolisComponent;
  let fixture: ComponentFixture<MinneapolisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinneapolisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinneapolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
