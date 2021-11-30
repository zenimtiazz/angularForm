import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(private http: HttpClient
    ) { }

  addFriend(friend: Friend , url:string){
  
    console.log(friend);
    return this.http.post('http://localhost:6969/allFriends',friend);
  }
  getFriend():Observable <any>{
    return this.http.get('http://localhost:6969/allFriends');
  }
}
