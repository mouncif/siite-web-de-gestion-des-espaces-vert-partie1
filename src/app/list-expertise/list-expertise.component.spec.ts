import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpertiseComponent } from './list-expertise.component';

describe('ListExpertiseComponent', () => {
  let component: ListExpertiseComponent;
  let fixture: ComponentFixture<ListExpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
