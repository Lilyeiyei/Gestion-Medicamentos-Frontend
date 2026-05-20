import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicamentoscrear } from './medicamentoscrear';

describe('Medicamentoscrear', () => {
  let component: Medicamentoscrear;
  let fixture: ComponentFixture<Medicamentoscrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medicamentoscrear],
    }).compileComponents();

    fixture = TestBed.createComponent(Medicamentoscrear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
