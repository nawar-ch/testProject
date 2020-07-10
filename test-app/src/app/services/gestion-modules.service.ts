import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionModulesService {

  constructor(private http: HttpClient, private router: Router) { }

  // get all app module :
  getAppModules(): Observable<any> {

   return this.http.get('http://localhost:8000/api/AppModule/List');
 }


 // Create App Module:
 createAppModule(data): Observable<any> {

   return this.http.post('http://localhost:8000/api/AppModule/Save', data);
 }


 // Delete App Module :
 deleteAppModule(id): Observable<any> {
   //console.log(id + " id of cours service to delete");
   return this.http.delete('http://localhost:8000/api/AppModule/Delete/' + id);
 }


 // Edit App Module:
 editAppModule(data): Observable<any> {
   return this.http.put('http://localhost:8000/api/AppModule/Update', data);
   }
 // get all Menus :
 getMenus(): Observable<any> {

   return this.http.get('http://localhost:8000/api/Menu/ListMenuComp');
 }


 // Create Menu:
 createMenu(data): Observable<any> {

   return this.http.post('http://localhost:8000/api/Menu/Save', data);
 }


 // Delete Menu :
 deleteMenu(id): Observable<any> {
   //console.log(id + " id of cours service to delete");
   return this.http.delete('http://localhost:8000/api/Menu/Delete/' + id);
 }


 // Edit Menu:
 editMenu(data): Observable<any> {
   return this.http.put('http://localhost:8000/api/Menu/Update', data);
   }

 // get Composants By Menu
   getComposantsByMenu(id): Observable<any> {
     return this.http.get('http://localhost:8000/api/'+id+'/Menus');
   }
// get all Compsants :
getComposants(): Observable<any> {

 return this.http.get('http://localhost:8000/api/Composant/List');
}


// Create Composant:
createComposant(data): Observable<any> {

 return this.http.post('http://localhost:8000/api/Composant/Save', data);
}


// Delete Composant :
deleteComposant(id): Observable<any> {
 //console.log(id + " id of cours service to delete");
 return this.http.delete('http://localhost:8000/api/Composant/Delete/' + id);
}


// Edit Composant:
editComposant(data): Observable<any> {
 return this.http.put('http://localhost:8000/api/Composant/Update', data);
 }
}
