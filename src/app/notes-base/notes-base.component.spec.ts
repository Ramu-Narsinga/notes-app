import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesBaseComponent } from './notes-base.component';

describe('NotesBaseComponent', () => {
  let component: NotesBaseComponent;
  let fixture: ComponentFixture<NotesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
