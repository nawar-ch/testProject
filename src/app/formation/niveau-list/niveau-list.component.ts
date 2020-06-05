import { Component, OnInit } from '@angular/core';
import { NiveauService } from '../services/niveau.service';
import { ToastrService } from 'ngx-toastr';
import { Niveau } from '../models/niveau.model';


@Component({
  selector: 'app-niveau-list',
  templateUrl: './niveau-list.component.html',
  styleUrls: ['./niveau-list.component.css']
})
export class NiveauListComponent implements OnInit {

  niveaux: Niveau [] = [];


  constructor(private niveauService: NiveauService, private toastr: ToastrService) {

    
    niveauService.getNiveaus().subscribe(res => {
    console.log(res);
    this.niveaux = res;
  }, err => {
    console.log(err);


  });

   }

  ngOnInit(): void {
  }

}
