import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuContraPage } from './recu-contra.page';

describe('RecuContraPage', () => {
  let component: RecuContraPage;
  let fixture: ComponentFixture<RecuContraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
