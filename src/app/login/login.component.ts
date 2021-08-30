import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser:any

  loginForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(5)]]
  })
  userName:any

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  
  login(){
    
     if(this.loginForm.valid){
      var username=this.loginForm.value.username;
      var password=this.loginForm.value.password;

      this.ds.login(username,password).subscribe((user:any)=>{
        console.log(user);
        
        if(user){
          alert(user.message)
          this.currentUser=localStorage.setItem("currentUser",user.currentUser)
          this.userName=localStorage.setItem("currentUserName",user.currentUserName)
          this.router.navigateByUrl("dashboard")
        }
      },(user)=>{
        alert(user.error.message)
      })

     }
     else{
       alert("please fill all fields")
     }
      // let loginResult=this.ds.login(username,password)
      // if(loginResult==1){
      //   alert("Login success")
      //   this.router.navigateByUrl("dashboard")
      // }
      // else if(loginResult==-1){
      //   this.router.navigateByUrl("")
      //   alert("Invalid password")
      // }
      // else{
      //   this.router.navigateByUrl("")
      //   alert("User Not found")
      // }

  }

}
