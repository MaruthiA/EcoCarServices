import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
