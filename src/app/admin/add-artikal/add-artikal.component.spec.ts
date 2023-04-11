import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtikalComponent } from './add-artikal.component';

describe('AddPerajaComponent', () => {
  let component: AddArtikalComponent;
  let fixture: ComponentFixture<AddArtikalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtikalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtikalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
