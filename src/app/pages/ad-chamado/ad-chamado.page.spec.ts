import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdChamadoPage } from './ad-chamado.page';

describe('AdChamadoPage', () => {
  let component: AdChamadoPage;
  let fixture: ComponentFixture<AdChamadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdChamadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
