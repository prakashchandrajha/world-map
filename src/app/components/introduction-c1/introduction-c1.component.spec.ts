import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionC1Component } from './introduction-c1.component';

describe('IntroductionC1Component', () => {
  let component: IntroductionC1Component;
  let fixture: ComponentFixture<IntroductionC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionC1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
