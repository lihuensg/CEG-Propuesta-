import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cegonline } from './cegonline';

describe('Cegonline', () => {
  let component: Cegonline;
  let fixture: ComponentFixture<Cegonline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cegonline],
    }).compileComponents();

    fixture = TestBed.createComponent(Cegonline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
