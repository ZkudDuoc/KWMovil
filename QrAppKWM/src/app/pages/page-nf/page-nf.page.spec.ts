import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNFPage } from './page-nf.page';

describe('PageNFPage', () => {
  let component: PageNFPage;
  let fixture: ComponentFixture<PageNFPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
