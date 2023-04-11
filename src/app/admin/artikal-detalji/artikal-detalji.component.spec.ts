import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikalDetaljiComponent } from './artikal-detalji.component';

describe('PerajaDetaljiComponent', () => {
  let component: ArtikalDetaljiComponent;
  let fixture: ComponentFixture<ArtikalDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikalDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikalDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
