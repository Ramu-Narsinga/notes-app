import { TestBed } from '@angular/core/testing';

import { NotesAppService } from './notes-app.service';

describe('NotesAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesAppService = TestBed.get(NotesAppService);
    expect(service).toBeTruthy();
  });
});
