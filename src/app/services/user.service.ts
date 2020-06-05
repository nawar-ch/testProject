import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	readonly apiUrl = 'http://localhost:8000';
	// Holds the validation errors coming from the server
	errorResp: HttpErrorResponse = null;

	// Holds if the user is logged in or not
	private loggedIn = new BehaviorSubject<boolean>(this._tokenService.isTokenValid());
	authStatus = this.loggedIn.asObservable();

	/**
	 * Creates an instance of user service.
	 * @param http
	 * @param router
	 * @param messageService
	 * @param _tokenService
	 */

  constructor(private http: HttpClient, private router: Router, private _tokenService: TokenService) {}


  userAuthentication(email, password) {
    var data = "email=" + email + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.apiUrl + '/api/auth/login', data, { headers: reqHeader });
  }

  parseUser(): any {
	return JSON.parse(localStorage.getItem('parseUser'));
}

getUser(): any {
	return localStorage.getItem('currentUser');
}

roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;

  }


  	/**
	 * Logins server side
	 * @param form
	 * @returns server$
	 */
	loginServer(data): Observable<User> {
		console.log(`userService => trying to loginServer : `, data);
		var test = localStorage.getItem(data.email);
		var email = data.email;
        var password = data.password;
		var all = email + ':' + password;
		console.log(test);

        return this.http.post(environment.apiUrl + '/api/auth/login', data);

  }

  	/**
	 * Logins client side
	 * @param user
	 */
	loginClient(user: User): void {

		this.changeAuthStatus(true);
		localStorage.setItem('user_info', user.email);
		console.log(localStorage.setItem('user_info', user.email));
		localStorage.setItem('role', user.profil);
		this.router.navigateByUrl('/dashboard');
	}

	/**
	 * Changes auth status
	 * @param value
	 */
	changeAuthStatus(value) {
		this.loggedIn.next(value);
	}








	/**
	 * Logouts server side
	 * @returns server$
	 */
	logoutServer(): Observable<User> {
		console.log(`userService => trying to logoutServer`);

		return this.http.get(environment.apiUrl + '/api/auth/login');

	}

	/**
	 * Logouts client side
	 */
	logoutClient(): void {
		this.changeAuthStatus(false);
		localStorage.clear();
		this.router.navigateByUrl('/login');
	}











	/**
	 * Gets user from server side
	 * @returns user$
	 */
	getUserServer(): Observable<User> {
		console.log(`userService => trying to getUser`);

		return this.http.get<User>(environment.apiUrl + '/').pipe(
			tap((user: User) => console.log(`userService => got user = `, user)),
			catchError(this.handleError(`userService => user not got`, null))
		);
  }

  	/**
	 * Gets error response
	 * @returns error response
	 */
	public getErrorResponse(): HttpErrorResponse {
		return this.errorResp;
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: HttpErrorResponse): Observable<T> => {

			console.error(`\n ${operation} failed : ${error.message}`);

			this.errorResp = error;

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}




/*
  // get all Technicians :
  getTechnicians(): Observable<any> {
    return this.http.get(environment.apiUrl + '/users');
  }
*/
}
