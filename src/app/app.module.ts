import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { UserDirective } from './user.directive';
// import { UsersComponent } from './users/users.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LandingPageComponent,
//     ProfileComponent,
//     UserComponent,
//     TimeAgoPipe,
//     UserDirective,
//     // UsersComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { ProfileService } from './profile.service';
// import {TimeAgoPipe} from './time-ago.pipe';
// // import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

// import { AppComponent } from './app.component';
// import { ProfileComponent } from './profile/profile.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { UserDirective } from './user.directive';
// import { UserComponent } from './user/user.component';
// import {RoutingModule} from './routing';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    UserDirective,
    UserComponent,
    TimeAgoPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // NgxPaginationModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

