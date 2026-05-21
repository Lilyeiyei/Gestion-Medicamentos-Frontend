import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creardoctor } from './creardoctor';

describe('Creardoctor', () => {
  let component: Creardoctor;
  let fixture: ComponentFixture<Creardoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creardoctor],
    }).compileComponents();

    fixture = TestBed.createComponent(Creardoctor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
