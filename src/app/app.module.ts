import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ClickOutsideDirective } from './Directives/clickOutside.directive';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninSignupComponent } from './Components/signin-signup/signin-signup.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchResultsComponent } from './Components/search-results/search-results.component';
import { OffsetComponent } from './Components/offset/offset.component';
import { LeaderboardComponent } from './Components/leaderboard/leaderboard.component';
import { CertificateComponent } from './Components/certificate/certificate.component';
import { UserComponent } from './Components/user/user.component';
import { DistanceComponent } from './Components/distance/distance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClickOutsideDirective,
    HomeComponent,
    MyprofileComponent,
    PageNotFoundComponent,
    SearchComponentComponent,
    SigninSignupComponent,
    SearchResultsComponent,
    OffsetComponent,
    LeaderboardComponent,
    CertificateComponent,
    UserComponent,
    DistanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
