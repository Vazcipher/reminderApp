import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import {EditEventComponent} from '../edit-event/edit-event.component'

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  currentUser:any
  events:any=[]

  constructor(private ds:DataService,private dialog:MatDialog,private router:Router) {
      this.currentUser=localStorage.getItem("currentUser")
        ds.getAllEvents().subscribe((result:any)=>{
          // console.log(result);
          
          if(result){
            this.events=result.events
          }
        },result=>{
          alert("No events")
        })

        
        
   }

   deleteEvent(i:any){

    this.events.splice(i,1)
    this.ds.deleteEvent(i).subscribe(result=>{
      console.log(result);
      
      if(result){
        alert("Event deleted successfully")
        this.router.navigateByUrl("listevents")
      }
    })
    // console.log(this.events);
    // this.events.splice(id)
}

openEditDialog(){
  this.dialog.open(EditEventComponent)
}

  ngOnInit(): void {
  }


}
