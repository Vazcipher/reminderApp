import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm=this.fb.group({
    event_name:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    date:["",[Validators.required]]
  })

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) {}

  ngOnInit(): void {
  }

  addEvent(){

    if(this.eventForm.valid){
      var event_name=this.eventForm.value.event_name
      var date=this.eventForm.value.date
      let result=this.ds.addEvent(event_name,date)
      console.log(result);
      if(result){
        this.router.navigateByUrl("dashboard")
      }
    }
    else{
      alert("Invalid Form")
    }
  }

}
