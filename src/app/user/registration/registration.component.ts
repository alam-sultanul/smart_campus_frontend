import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


 // constructor(public service: UserService, private toastr: ToastrService) { }
  constructor(public service: UserService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.service.formModel.reset();

     if(localStorage.getItem('token')!=null)
     this.router.navigateByUrl('/home');
  }

  onSubmit() {
    //this.service.register().subscribe()
   // alert("Click Sign In");

    this.service.register().subscribe(
      (res: any) => {
        if (res.Succeeded) {

          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');

        }
        else {
          res.Errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken', 'Registration Failed');
                //user name is already taccken
                break;
              default:
                this.toastr.error(element.description, 'Registration failed.');
                //registration failed
                break;
            }
          });


        }
      },
      err => {
        console.log(err);
      }
    );


  }



}
