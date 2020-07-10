import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionModulesService } from 'src/app/services/gestion-modules.service';
import { FormationsComponent } from './formations.component';
import { Composant } from 'src/app/models/composant.model';
import { CoursComponent } from './cours/cours.component';
const routes: Routes = [{ path: '', component: FormationsComponent },
{ path: 'cours', component: CoursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 
}
)
export class FormationsRoutingModule { 
composants: Composant[] = [];
v: String='/cours';
gestionModulesService:GestionModulesService;
ngOnInit(): void {
  this.gestionModulesService.getComposants().subscribe(res => {
    //console.log(designation);
    console.log(res);

    this.composants= res;

  }, err => {
    console.log(err);


  });

}

foreach(composant ){
  
}
}