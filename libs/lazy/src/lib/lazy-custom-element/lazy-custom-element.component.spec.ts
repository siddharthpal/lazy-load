import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCustomElementComponent } from './lazy-custom-element.component';

describe('LazyCustomElementComponent', () => {
  let component: LazyCustomElementComponent;
  let fixture: ComponentFixture<LazyCustomElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCustomElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
