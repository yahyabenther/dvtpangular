import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Connixion } from './connixion';

describe('Connixion', () => {
  let component: Connixion;
  let fixture: ComponentFixture<Connixion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Connixion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Connixion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
