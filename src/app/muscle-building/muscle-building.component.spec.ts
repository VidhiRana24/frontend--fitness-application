import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleBuildingComponent } from './muscle-building.component';

describe('MuscleBuildingComponent', () => {
  let component: MuscleBuildingComponent;
  let fixture: ComponentFixture<MuscleBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuscleBuildingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuscleBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
