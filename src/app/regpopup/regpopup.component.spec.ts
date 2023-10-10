import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpopupComponent } from './regpopup.component';

describe('RegpopupComponent', () => {
  let component: RegpopupComponent;
  let fixture: ComponentFixture<RegpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegpopupComponent]
    });
    fixture = TestBed.createComponent(RegpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
