import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""
  logedUserName=""

  users:any={
    1001:{uid:1001,name:"vasif",password:"12345",events:[]},
    1002:{uid:1002,name:"Althaf",password:"12345",events:[]},
    1003:{uid:1003,name:"sabith",password:"12345",events:[]}

  }


  constructor(private router:Router) {}

  addEvent(evnt:any,dte:any){
    this.getDetails()
    console.log(this.currentUser);
    let userDetails=this.users
    if(this.currentUser in userDetails){
      userDetails[this.currentUser].events.push({
        event:evnt,
        date:dte
      })
      console.log(userDetails);
      this.saveDetails()
      alert("Event added successfully")
      return userDetails[this.currentUser].events
    }
  }
  showLogedUser(){
    return this.users[this.currentUser]["name"]
  }

  listEvents(){
      this.getDetails()
      return this.users[this.currentUser].events
  }

  saveDetails(){
    let userDetails=this.users
    localStorage.setItem("users",JSON.stringify(userDetails))

  }

  getDetails(){
    if(localStorage.getItem("users")){
      this.users=JSON.parse(localStorage.getItem("users")||"")
      console.log(this.users);
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||"")
    }
  }

  register(uid:any,name:any,password:any){
    let userDetails=this.users

      if(uid in userDetails){
        return false
      }
      else{
        userDetails[uid]={
          uid,name,password,events:[]
        }
        this.saveDetails()
        return true
      }
  }

  
  login(uid:any,pswd:any){
    // this.getDetails()
    let userDetails=this.users;

    if(uid in userDetails){
      if(pswd == userDetails[uid]["password"]){
        localStorage.setItem("currentUser",JSON.stringify(userDetails[uid]["uid"]))
        this.getDetails()
        return 1
      }
      else{
        return -1
      }
    }
    else{
      return 0
    }
  }

}
