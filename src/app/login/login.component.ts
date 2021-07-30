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

  loginForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(5)]]
  })

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    
      var username=this.loginForm.value.username;
      var password=this.loginForm.value.password;

      let loginResult=this.ds.login(username,password)
      if(loginResult==1){
        alert("Login success")
        this.router.navigateByUrl("dashboard")
      }
      else if(loginResult==-1){
        this.router.navigateByUrl("")
        alert("Invalid password")
      }
      else{
        this.router.navigateByUrl("")
        alert("User Not found")
      }

  }

}
