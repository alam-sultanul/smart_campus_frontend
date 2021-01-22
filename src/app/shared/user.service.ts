 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
 // constructor(private fb: FormBuilder) { }
  readonly BaseURI = "http://localhost:5000/api";

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    },{ validator: this.comparePasswords })


  });


  comparePasswords(fb: FormGroup) 
  {
   
    let confirmPsrdCtrl = fb.get('ConfirmPassword');
    //alert("ppp"+confirmPsrdCtrl);
    //passwordMismatch
    //confirmPsrdCtrl.errors={passwordMIsmatch;true}

    if (confirmPsrdCtrl.errors == null || 'passwordMismatch' in confirmPsrdCtrl.errors)
    {
      if (fb.get('Password').value != confirmPsrdCtrl.value)
        confirmPsrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPsrdCtrl.setErrors(null);
    }

  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register',body);

  }

  login(formData){

    return this.http.post(this.BaseURI + '/ApplicationUser/Login',formData);

  }

  getUserProfile()
  {
    var tokenHeader = new HttpHeaders({'Authorization' :'Bearer '+localStorage.getItem('token')})
    return this.http.get(this.BaseURI + '/UserProfile',{headers:tokenHeader});
  }


  // for LeadListing
 

  getLeadListProfileList():Observable<any[]>{
    return this.http.get<any>(this.BaseURI+'/leadlist');
  }

  addLeadListProfile(val:any){
    return this.http.post(this.BaseURI+'/leadlist',val);
  }

  updateLeadListProfile(val:any){
    return this.http.put(this.BaseURI+'/leadlist',val);
  }
 
  deleteLeadListProfile(val:any){
    return this.http.delete(this.BaseURI+'/leadlist/'+val);
  }


}
