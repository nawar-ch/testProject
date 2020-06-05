import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient, private router: Router) {}

  
  // get all Modules :
  getFormations(): Observable<any> {
    return this.http.get(environment.apiUrl + '/Module/List');
  }

  
  // Create Module :
  createFormation(data): Observable<any> {
    return this.http.post(environment.apiUrl + '/Module/Save', data);
  }

  // Delete Module :
  deleteFormation(id): Observable<any> {
    return this.http.delete(environment.apiUrl + '/Module/Delete', id);
  }

  // Edit Module :
  editFormation(data): Observable<any> {
    return this.http.put(environment.apiUrl + '/Module/Update', data);
    }

}
