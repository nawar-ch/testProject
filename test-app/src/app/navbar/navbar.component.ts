import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GestionModulesService } from 'src/app/services/gestion-modules.service';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menus: Menu [] = [];

  constructor(private router: Router, 
    private gestionModulesService:GestionModulesService) { }

  ngOnInit(): void {
    this.gestionModulesService.getMenus().subscribe(res => {
      //console.log(designation);
      console.log(res);

      this.menus= res;

    }, err => {
      console.log(err);


    });
  }
  }


