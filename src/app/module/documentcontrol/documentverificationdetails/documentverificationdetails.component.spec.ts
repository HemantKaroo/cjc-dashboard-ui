import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentverificationdetailsComponent } from './documentverificationdetails.component';

describe('DocumentverificationdetailsComponent', () => {
  let component: DocumentverificationdetailsComponent;
  let fixture: ComponentFixture<DocumentverificationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentverificationdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentverificationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
