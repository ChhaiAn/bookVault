import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchBookComponent } from './student-search-book.component';

describe('StudentSearchBookComponent', () => {
  let component: StudentSearchBookComponent;
  let fixture: ComponentFixture<StudentSearchBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSearchBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSearchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
