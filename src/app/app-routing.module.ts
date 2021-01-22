import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LeadlistComponent } from './home/leadlist/leadlist.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes =
  [
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  //  { path: 'home/leads', component : LeadlistComponent, pathMatch: 'full' },
    // { path: '', redirectTo: '/user/registration', pathMatch: 'full' },
    {
      path: 'user', component: UserComponent,
      children:
        [
          { path: 'registration', component: RegistrationComponent },
          { path: 'login', component: LoginComponent }
        ]
    },

    //{ path: 'home', component: HomeComponent ,canActivate:[AuthGuard]}
    {
      path: 'home', component: HomeComponent,
      children:
        [
          { path: 'leadlist', component: LeadlistComponent }
        ]

    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
