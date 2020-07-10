import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursService {

 
  constructor(private http: HttpClient, private router: Router) {}



  // get all courss :
  getCours(): Observable<any> {

    return this.http.get( 'http://localhost:8000/api/Cours/List');
  }



}
