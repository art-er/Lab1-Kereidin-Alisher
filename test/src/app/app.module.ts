import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddRecordComponent} from './Add-record/add-record.component';
import {ResultsComponent} from './Results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
