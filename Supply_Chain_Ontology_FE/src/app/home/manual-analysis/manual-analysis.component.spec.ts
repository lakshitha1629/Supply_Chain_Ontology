import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAnalysisComponent } from './manual-analysis.component';

describe('ManualAnalysisComponent', () => {
  let component: ManualAnalysisComponent;
  let fixture: ComponentFixture<ManualAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
