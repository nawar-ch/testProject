import { Component, OnInit } from '@angular/core';
import { CoursService} from '../services/cours.service';
import { Cours} from '../models/cours.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  cours: Cours [] = [];

  constructor(
    private coursService: CoursService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.coursService.getCours().subscribe(res => {
      //console.log(designation);
      console.log(res);

      this.cours = res;

    }, err => {
      console.log(err);


    });
  }

}
