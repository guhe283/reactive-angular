import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitElementComponent } from './cockpit-element.component';

describe('CockpitElementComponent', () => {
  let component: CockpitElementComponent;
  let fixture: ComponentFixture<CockpitElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
