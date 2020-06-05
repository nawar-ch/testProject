import { Component, OnInit } from '@angular/core';
import { Administrateur } from 'app/profils/models/administrateur.model';
import { ProfilService } from 'app/profils/services/profil.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  administrateurs: Administrateur [] = [];
  
  constructor(private administrateurService: ProfilService, private toastr: ToastrService) {

    

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
