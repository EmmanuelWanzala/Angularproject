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

