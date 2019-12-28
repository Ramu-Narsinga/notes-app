import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-base/notes-list/notes-list.component';
import { EditNoteComponent } from './notes-base/edit-note/edit-note.component';
import { NotesBaseComponent } from './notes-base/notes-base.component';

import { appStoreProviders } from '../utils/store/index';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    EditNoteComponent,
    NotesBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
