import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AdministratifComponent } from './administratif/administratif.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AdministratifListComponent } from './administratif-list/administratif-list.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';



@NgModule({
  declarations: [AdministrateurComponent, AdministratifComponent, EtudiantComponent, EnseignantComponent, AdministratifListComponent, EtudiantListComponent, EnseignantListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdministrateurComponent,
    AdministratifComponent,
    EtudiantComponent,
    EnseignantComponent
  ]
})
export class ProfilsModule { }
