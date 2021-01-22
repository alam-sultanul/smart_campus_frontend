import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  userDetails;

  constructor(private router:Router,private service:UserService) { }

  ngOnInit(): void {
    
    this.service.getUserProfile().subscribe(
      res=>{
        this.userDetails=res;
        console.log("response:"+res);
       // console.log("response:"+res['Email']);       
        console.log("token:"+localStorage.getItem('token'));

      },
      err=>{
        console.log("token"+localStorage.getItem('token'));
        console.log("Home Component!");
        console.log(err);
      }
    );
  }


  onLogout(){

    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);

  }


}
