import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesDetailComponent } from './packages-detail.component';

describe('PackagesDetailComponent', () => {
  let component: PackagesDetailComponent;
  let fixture: ComponentFixture<PackagesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackagesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackagesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
