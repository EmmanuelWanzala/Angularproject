// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { UserComponent } from './user/user.component';

import { ProfileComponent } from './profile/profile.component';

// Defining routes
const routes: Routes = [
  {path: '', component: LandingPageComponent},
 {path: 'user/repositories?', component: ProfileComponent},
 {path: 'userprofile?', component: UserComponent }
];

@NgModule({
 imports: [
   CommonModule,
   RouterModule.forRoot(routes)

 ],
 exports: [RouterModule],
 declarations: []
})
export class AppRoutingModule { }