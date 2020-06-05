import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient, private router: Router) {}

  
  // get all formations :
  getFormations(): Observable<any> {
    return this.http.get(environment.apiUrl + '/Formation/List');
  }

  
  // Create Formation :
  createFormation(data): Observable<any> {
    return this.http.post(environment.apiUrl + '/Formation/Save', data);
  }

  // Delete Formation :
  deleteFormation(id): Observable<any> {
    return this.http.delete(environment.apiUrl + '/Formation/Delete', id);
  }

  // Edit Formation :
  editFormation(data): Observable<any> {
    return this.http.put(environment.apiUrl + '/Formation/Update', data);
    }

  // List Niveaux By Formation
  getListNiveaux(): Observable<any> {
    return this.http.get(environment.apiUrl + '/Formation/ListNiveaux');
  }
}
