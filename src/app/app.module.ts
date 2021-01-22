import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';

//sas
import { NgModule } from '@angular/core';
//import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { LeadlistComponent } from './home/leadlist/leadlist.component';
import { ShowleadComponent } from './home/leadlist/showlead/showlead.component';
import { AddeditleadComponent } from './home/leadlist/addeditlead/addeditlead.component';

//import { LeadListingComponent } from './user/lead-listing/lead-listing.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    LeadlistComponent,
    ShowleadComponent,
    AddeditleadComponent
    
   // LeadListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
