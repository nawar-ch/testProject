import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  constructor(
    private fb: FormBuilder,
    private _tokenService: TokenService,
    private _userService: UserService,
    private router : Router
    //private toastr: ToastrService
  ) { }

  ngOnInit() {

    // Forms initialization
    this.initLoginForm();
  }


  OnSubmit(email,password){
		this._userService.userAuthentication(email,password).subscribe((data : any)=>{
		 localStorage.setItem('userToken',data.access_token);
		 localStorage.setItem('userRoles',data.role);
		 this.router.navigate(['/dashboard']);
	   },
	   (err : HttpErrorResponse)=>{
		 this.isLoginError = true;
	   });
	 }

  
    // Login Form
    loginForm: FormGroup;
    loginErrorMsg: string = '';

    initLoginForm() {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
        remember: [true]
      });
    }


  submitLoginForm(email,password): void {

    this._userService.loginServer(this.loginForm.value)
      .subscribe(
        (user : any) => {

          //localStorage.setItem('user_info', user.email);
          //var users = localStorage.getItem('currentUser');
          //var users = JSON.parse(localStorage.getItem('currentUser'));
          var token = localStorage.setItem('user_info', user.access_token);
          console.log(token);
          
          //console.log(users);
          localStorage.setItem('userRoles', user.profil);
          this.router.navigate(['/dashboard']);
        },

        (err : HttpErrorResponse) => {
          
          this.isLoginError = true

      });

  }



  get user(): any {
    return localStorage.getItem('currentUser');
}
  cleanLoginPwd() {
    this.loginForm.patchValue({
      password: ''
    });
  }

/*
  showNotification(from, align){

    const color = Math.floor((Math.random() * 5) + 1);

      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Password or email <b>invalide</b>', '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-danger alert-with-icon",
      positionClass: 'toast-' + from + '-' +  align
       });
    }
*/


}
