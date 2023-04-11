import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikalListaComponent } from './artikal-lista.component';

describe('ArtikalListaComponent', () => {
  let component: ArtikalListaComponent;
  let fixture: ComponentFixture<ArtikalListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikalListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikalListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
