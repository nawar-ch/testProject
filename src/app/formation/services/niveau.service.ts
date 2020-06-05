import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  constructor(private http: HttpClient, private router: Router) {}

  
  // get all Niveaux :
  getNiveaus(): Observable<any> {
    return this.http.get(environment.apiUrl + '/Niveau/List');
  }

  
  // Create Niveau :
  createNiveau(data): Observable<any> {
    return this.http.post(environment.apiUrl + '/Niveau/Save', data);
  }

  // Delete Niveau :
  deleteNiveau(id): Observable<any> {
    return this.http.delete(environment.apiUrl + '/Niveau/Delete', id);
  }

  // Edit Niveau :
  editNiveau(data): Observable<any> {
    return this.http.put(environment.apiUrl + '/Niveau/Update', data);
    }

  // List Modules By Niveau
  getListNiveaux(): Observable<any> {
    return this.http.get(environment.apiUrl + '/Niveau/ListModules');
  }
}
