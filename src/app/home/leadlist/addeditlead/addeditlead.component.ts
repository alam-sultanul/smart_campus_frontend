import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-addeditlead',
  templateUrl: './addeditlead.component.html',
  styleUrls: ['./addeditlead.component.css']
})
export class AddeditleadComponent implements OnInit {

  constructor(private service:UserService) { }

  //ActivateAddEditDeleteComp:boolean=false;
  
  @Input() pro:any;
  ProfileId!:string;
  ProfileName!:string;
  OriginType!:string;
  EmailAddress!:string;
  ContactNumber!:number;
  Nationality!:string;
  LeadScoring!:string;
  LeadStatus!:string;
  ProfileType!:string;
  RegistrationDate!:Date;
 

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile()
  {
    

    this.ProfileId=this.pro.ProfileId;
    this.ProfileName=this.pro.ProfileName;
    this.OriginType=this.pro.OriginType;
    this.EmailAddress=this.pro.EmailAddress;
    this.Nationality=this.pro.Nationality;
    this.ContactNumber=this.pro.ContactNumber;
    this.LeadScoring=this.pro.LeadScoring;
    this.LeadStatus=this.pro.LeadStatus;
    this.ProfileType=this.pro.ProfileType;
    this.RegistrationDate=this.pro.RegistrationDate;
   
  }

  addProfile()
  {
  //  alert("profile name"+this.ProfileName);
    var val = {ProfileId:this.ProfileId,
      ProfileName:this.ProfileName,
      OriginType:this.OriginType,
      EmailAddress:this.EmailAddress,
      ContactNumber:this.ContactNumber,
      Nationality:this.Nationality,
      LeadScoring:this.LeadScoring,
      LeadStatus:this.LeadStatus,
      ProfileType:this.ProfileType,
      RegistrationDate:this.RegistrationDate
    };
this.service.addLeadListProfile(val).subscribe(res=>{
alert(res.toString());
});

  }

  updateProfile()
  {

    var val = {ProfileId:this.ProfileId,
      ProfileName:this.ProfileName,
      OriginType:this.OriginType,
      EmailAddress:this.EmailAddress,
      ContactNumber:this.ContactNumber,
      Nationality:this.Nationality,
      LeadScoring:this.LeadScoring,
      LeadStatus:this.LeadStatus,
      ProfileType:this.ProfileType,
      RegistrationDate:this.RegistrationDate
    };
this.service.updateLeadListProfile(val).subscribe(res=>{
alert(res.toString());
});

  }

}
