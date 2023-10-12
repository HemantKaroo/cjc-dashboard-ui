import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountheadviewComponent } from './accountheadview.component';

describe('AccountheadviewComponent', () => {
  let component: AccountheadviewComponent;
  let fixture: ComponentFixture<AccountheadviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountheadviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountheadviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
