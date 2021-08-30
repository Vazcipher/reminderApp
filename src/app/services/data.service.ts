import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUser:any
  logedUserName=""

  users:any={
    1001:{uid:1001,name:"vasif",password:"12345",events:[]},
    1002:{uid:1002,name:"Althaf",password:"12345",events:[]},
    1003:{uid:1003,name:"sabith",password:"12345",events:[]}

  }


  constructor(private router:Router,private http:HttpClient) {this.currentUser=localStorage.getItem("currentUser")}

  // addEvent(evnt:any,dte:any){
  //   this.getDetails()
  //   console.log(this.currentUser);
  //   let userDetails=this.users
  //   if(this.currentUser in userDetails){
  //     userDetails[this.currentUser].events.push({
  //       event:evnt,
  //       date:dte
  //     })
  //     console.log(userDetails);
  //     this.saveDetails()
  //     alert("Event added successfully")
  //     return userDetails[this.currentUser].events
  //   }
  // }
  // showLogedUser(){
  //   return this.users[this.currentUser]["name"]
  // }

  // listEvents(){
  //     this.getDetails()
  //     return this.users[this.currentUser].events
  // }

  saveDetails(){
    let userDetails=this.users
    localStorage.setItem("users",JSON.stringify(userDetails))

  }

  // getDetails(){
  //   if(localStorage.getItem("users")){
  //     this.users=JSON.parse(localStorage.getItem("users")||"")
  //     console.log(this.users);
  //   }
  //   if(localStorage.getItem("currentUser")){
  //     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||"")
  //   }
  // }

  addEvents(userId:any,eventName:any,date:any){
    const data={
      userId,
      eventName,
      date
    }
    return this.http.post("http://localhost:3000/addEvents",data,options)
  }

  getAllEvents(){
    return this.http.get("http://localhost:3000/getAllEvents",options)
  }

  getTodayEvent(dateFormated:any){
    const data={
      dateFormated
    }
    return this.http.post("http://localhost:3000/getTodayEvent",data,options)

  }

  register(userId:any,userName:any,password:any){

    const data={
      userId,
      userName,
      password
    }

    return this.http.post("http://localhost:3000/register",data)
  }

  
  login(userId:any,password:any){

    const data={
      userId,
      password
    }

    return this.http.post("http://localhost:3000/login",data,options)
  }

  deleteEvent(i:any){

    return this.http.delete("http://localhost:3000/deleteEvent/"+i,options)
  }

}
