import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandisburgmentComponent } from './loandisburgment.component';

describe('LoandisburgmentComponent', () => {
  let component: LoandisburgmentComponent;
  let fixture: ComponentFixture<LoandisburgmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandisburgmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandisburgmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
