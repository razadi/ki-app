import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KistoreComponent } from './kistore.component';

describe('KistoreComponent', () => {
  let component: KistoreComponent;
  let fixture: ComponentFixture<KistoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KistoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KistoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
