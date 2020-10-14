import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThoughtsListComponent } from './components/thoughts-list/thoughts-list.component';
import { ThoughtDetailsComponent } from './components/thought-details/thought-details.component';
import { AddThoughtComponent } from './components/add-thought/add-thought.component';

const routes: Routes = [
  {path: '', redirectTo: 'thoughts', pathMatch: 'full'},
  {path: 'thoughts', component: ThoughtsListComponent},
  {path: 'thoughts/:id', component: ThoughtDetailsComponent},
  {path: 'add', component: AddThoughtComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
