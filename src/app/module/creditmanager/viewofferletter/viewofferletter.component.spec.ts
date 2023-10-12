import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewofferletterComponent } from './viewofferletter.component';

describe('ViewofferletterComponent', () => {
  let component: ViewofferletterComponent;
  let fixture: ComponentFixture<ViewofferletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewofferletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewofferletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
