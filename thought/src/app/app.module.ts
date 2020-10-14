import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddThoughtComponent } from './components/add-thought/add-thought.component';
import { ThoughtDetailsComponent } from './components/thought-details/thought-details.component';
import { ThoughtsListComponent } from './components/thoughts-list/thoughts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddThoughtComponent,
    ThoughtDetailsComponent,
    ThoughtsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
