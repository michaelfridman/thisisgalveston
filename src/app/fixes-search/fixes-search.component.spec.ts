import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixesSearchComponent } from './fixes-search.component';

describe('FixesSearchComponent', () => {
  let component: FixesSearchComponent;
  let fixture: ComponentFixture<FixesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
