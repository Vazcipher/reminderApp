import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DatePipe, formatDate } from '@angular/common'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser:any
  user:any=""
  date:any
  dateFormated:any
  // dateFormated=this.currentDate.toLocaleString('en-IN',{
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric', 
  // })

  todaysEvents:any=[]
  vasif=""
  
  constructor(private ds:DataService,private datePipe:DatePipe) {
  this.date=new Date()
  this.dateFormated=this.datePipe.transform(this.date,'yyyy-MM-dd')
    this.user=localStorage.getItem("currentUserName")
    
    ds.getTodayEvent(this.dateFormated).subscribe(((result:any)=>{
      console.log(result);
      
      if(result){
        this.todaysEvents=result.todaysEvents
        // console.log(this.todaysEvents);
        
      }
    }))

   }

  ngOnInit(): void {
  }

}
