import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewofferletterlistComponent } from './viewofferletterlist.component';

describe('ViewofferletterlistComponent', () => {
  let component: ViewofferletterlistComponent;
  let fixture: ComponentFixture<ViewofferletterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewofferletterlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewofferletterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
