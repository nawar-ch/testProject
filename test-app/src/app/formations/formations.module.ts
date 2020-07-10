import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationsComponent } from './formations.component';
import { CoursComponent } from './cours/cours.component';



@NgModule({
  declarations: [FormationsComponent, CoursComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //ComponentsModule,
    RouterModule,
    CommonModule,
    FormationsRoutingModule
  ]
})
export class FormationsModule { }
