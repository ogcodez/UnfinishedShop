import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkolskaOpremaComponent } from './skolska_oprema.component';

describe('SkolskaOpremaComponent', () => {
  let component: SkolskaOpremaComponent;
  let fixture: ComponentFixture<SkolskaOpremaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkolskaOpremaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkolskaOpremaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
