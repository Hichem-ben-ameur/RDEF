import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionVisiteurComponent } from './inscription-visiteur.component';

describe('InscriptionVisiteurComponent', () => {
  let component: InscriptionVisiteurComponent;
  let fixture: ComponentFixture<InscriptionVisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionVisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
