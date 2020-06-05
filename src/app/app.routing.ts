import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BeforeLoginGuard } from './guards/before-login.guard';
import { AfterLoginGuard } from './guards/after-login.guard';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdministrateurComponent } from './profils/administrateur/administrateur.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [BeforeLoginGuard]
  },


  
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }],
  canActivate: [AfterLoginGuard]

    },

    
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginGuard]

    },

    {
      path: '**',
      redirectTo: 'login',
      canActivate: [BeforeLoginGuard]
  
    }
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
