import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ProfilService } from '../services/profil.service';
import { Administrateur } from '../models/administrateur.model';
@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {

  administrateurs: Administrateur [] = [];

  constructor(private administrateurService: ProfilService) {

    

    administrateurService.getAdministrateurs().subscribe(res => {
      console.log(res);
      this.administrateurs = res;
    }, err => {
      console.log(err);
  
  
    });
   }

  ngOnInit() {
  }

}
