import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesBaseComponent } from './notes-base/notes-base.component';

const routes: Routes = [{
  path: '', component: NotesBaseComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
