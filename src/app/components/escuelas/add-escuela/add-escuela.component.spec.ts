import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEscuelaComponent } from './add-escuela.component';

describe('AddEscuelaComponent', () => {
  let component: AddEscuelaComponent;
  let fixture: ComponentFixture<AddEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEscuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
