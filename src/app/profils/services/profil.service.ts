import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient, private router: Router) { }

    
  // get all Administrateurs :
  getAdministrateurs(): Observable<any> {
    return this.http.get(environment.apiUrl + '/Administrateur/List');
  }

  
  // Create Formation :
  createAdministrateur(data): Observable<any> {
    return this.http.post(environment.apiUrl + '/Administrateur/Save', data);
  }

  // Delete Formation :
  deleteAdministrateur(id): Observable<any> {
    return this.http.delete(environment.apiUrl + '/Administrateur/Delete', id);
  }

  // Edit Formation :
  editAdministrateur(data): Observable<any> {
    return this.http.put(environment.apiUrl + '/Administrateur/Update', data);
    }
}
