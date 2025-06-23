import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageSiteComponent } from './heritage-site.component';

describe('HeritageSiteComponent', () => {
  let component: HeritageSiteComponent;
  let fixture: ComponentFixture<HeritageSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeritageSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeritageSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
