import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-base/notes-list/notes-list.component';
import { EditNoteComponent } from './notes-base/edit-note/edit-note.component';
import { NotesBaseComponent } from './notes-base/notes-base.component';

import { appStoreProviders } from '../utils/store/index';
import { ToolbarComponent } from './notes-base/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    EditNoteComponent,
    NotesBaseComponent,
    ToolbarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
