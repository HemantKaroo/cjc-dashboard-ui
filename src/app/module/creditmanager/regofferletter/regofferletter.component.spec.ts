import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegofferletterComponent } from './regofferletter.component';

describe('RegofferletterComponent', () => {
  let component: RegofferletterComponent;
  let fixture: ComponentFixture<RegofferletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegofferletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegofferletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
