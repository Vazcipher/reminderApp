import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    user_id:["",[Validators.required,Validators.pattern('[0-9]*')]],
    name:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password:["",[Validators.required,Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(5)]]
  })

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.registerForm.valid){
      var user_id=this.registerForm.value.user_id;
      var name=this.registerForm.value.name;
      var password=this.registerForm.value.password;
  
      this.ds.register(user_id,name,password).subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },(result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert("Invalid Form")
    }
  }
}
