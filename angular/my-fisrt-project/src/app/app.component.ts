import { Component } from '@angular/core';

import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  submitted = false;
  [x: string]: any;
  public friendModel= new Friend();
  friends :any;
url : string = 'http://localhost:6969/allFriends';
  public languages = ["HTML", "PHP", "CSS" , "JS"];
  async ngOnInit() {
    this.friends= await this.getFriends();
    console.log(this.friends);
    
  }
constructor(private addFriendService:AddFriendService){}
onClickSubmit(friendModel: Friend){
  this.submitted =true;
  // this.addFriendService.postFriend(this.friendModel, 'http://localhost:6969/allFriends').subscribe((friend : Friend[])=>(this.friends = friend)); 
 this.addFriendService.addFriend(this.friendModel,'').subscribe(data =>{
   console.log('it worked');
   },
   error=>{
     console.log('didnt work');
     
      })
      
     
  }
async getFriends(){
const data = await fetch(this.url,{  headers : {
    'Content-Type': 'application/json'
  }
});
const res = await data.json();
return res;
}




}
  
