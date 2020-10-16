import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThoughtsListComponent } from './components/thoughts-list/thoughts-list.component';
import { AddThoughtComponent } from './components/add-thought/add-thought.component';

const routes: Routes = [
  {path: 'thoughts', component: ThoughtsListComponent},
  {path: 'add', component: AddThoughtComponent},
  {path: '', redirectTo: 'thoughts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
