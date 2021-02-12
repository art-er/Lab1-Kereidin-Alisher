import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultsComponent} from './results/results.component';
import {AddRecordComponent} from './add-record/add-record.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ResultsComponent,
    AddRecordComponent
  ],
  exports: [
    ResultsComponent,
    AddRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
