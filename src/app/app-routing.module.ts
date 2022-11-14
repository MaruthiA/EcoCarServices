import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './Components/certificate/certificate.component';
import { LeaderboardComponent } from './Components/leaderboard/leaderboard.component';
import { OffsetComponent } from './Components/offset/offset.component';
import { SearchResultsComponent } from './Components/search-results/search-results.component';
import { UserComponent } from './Components/user/user.component';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "Home",
    pathMatch: "full",
  },
  {
    path: "Home",
    component: HomeComponent,
  },
  {
    path: "Myprofile",
    component: MyprofileComponent,
  },
  {
    path: "offset",
    component: OffsetComponent,
  },

  {
    path: "search",
    component: SearchResultsComponent,
  },
  {
    path: "leaderboard",
    component: LeaderboardComponent,
  },
  {
    path: "certificate",
    component: CertificateComponent,
  },
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "**",
    redirectTo: "Home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, MyprofileComponent];
