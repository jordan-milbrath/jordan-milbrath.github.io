import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectSectionComponent } from './aspect-section.component';

describe('AspectSectionComponent', () => {
  let component: AspectSectionComponent;
  let fixture: ComponentFixture<AspectSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspectSectionComponent]
    });
    fixture = TestBed.createComponent(AspectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
