import { Component } from '@angular/core';

import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  [x: string]: any;
  public friendModel= new Friend();
  friends :Friend[]=[];

  public languages = ["HTML", "PHP", "CSS" , "JS"];
  ngOnInit(): void {
    this.addFriendService.getFriend().subscribe((friend: Friend[]) => (this.friends = friend));
  }


constructor(private addFriendService:AddFriendService){}
onClickSubmit(friendModel: Friend){
 this.addFriendService.addFriend(this.friendModel,'').subscribe(data =>{
   console.log('it worked');
   },
   error=>{
     console.log('didnt work');
     
      })
 
     
  }
}
  
