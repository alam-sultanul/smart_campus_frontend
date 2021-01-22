import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-showlead',
  templateUrl: './showlead.component.html',
  styleUrls: ['./showlead.component.css']
})
export class ShowleadComponent implements OnInit {

  

  
  constructor(private service:UserService) { }

 ProfileList:any=[];
 ActivateAddEditDeleteComp:boolean=false;
 ModalTitle!:string;
 
  pro:any;


  ngOnInit(): void 
  {
    this.refreshProfileList();
  }

  refreshProfileList()
  {

    this.service.getLeadListProfileList().subscribe(data=>{this.ProfileList=data;});
    
  }

  addClick()
  {
    alert("modal add button");
    this.pro={
      ProfileId:0,
      ProfileName:"",
      OriginType:"",
      EmailAddress:"",
      ContactNumber:"",
      Nationality:"",
      LeadScoring:"",
      LeadStatus:"",
      ProfileType:"",
      RegistrationDate:""
    }
    this.ModalTitle="Add New Profile";
    this.ActivateAddEditDeleteComp=true;
    
    this.refreshProfileList();
  }

  editClick(dataItem:any)
  {
    alert("Edit Profile Name : "+dataItem.ProfileName);
    console.log(dataItem);
    this.pro=dataItem;
    alert("Pro Name : "+dataItem.ProfileId);
    this.ModalTitle="Edit Profile";
    this.ActivateAddEditDeleteComp=true;

  }

  closeClick()
  {
    this.refreshProfileList();
    this.ActivateAddEditDeleteComp=false;

  }

  deleteClick(item:any)
  {
    if(confirm('Are you sure Delete '+item.ProfileName+' profile'))
    {
      this.service.deleteLeadListProfile(item.ProfileId).subscribe(data=>{alert(data.toString())
      this.refreshProfileList();

    });
      
    }

  }

  refreshClick()
  {
    alert('refresh');
    this.refreshProfileList();
  }
}
