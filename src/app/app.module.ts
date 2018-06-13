import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { NewProjectComponent } from './new-project/new-project.component';

import { DataService } from './data.service'




@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NewProjectComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,

    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'project' },
      { path: 'project', component: ProjectComponent },
      { path: 'newproject', component:NewProjectComponent},
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
