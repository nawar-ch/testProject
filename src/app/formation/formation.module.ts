import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation/formation.component';
import { ModuleComponent } from './module/module.component';
import { NiveauComponent } from './niveau/niveau.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { NiveauListComponent } from './niveau-list/niveau-list.component';



@NgModule({
  declarations: [FormationComponent, ModuleComponent, NiveauComponent, FormationListComponent, ModuleListComponent, NiveauListComponent],
  imports: [
    CommonModule
  ],
  exports:  [
    FormationComponent,
    ModuleComponent,
    NiveauComponent
  ]
})
export class FormationModule { }
