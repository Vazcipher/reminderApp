import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  events:any

  constructor(private ds:DataService) {
        this.events=ds.listEvents()
        console.log(this.events);
        
   }

  ngOnInit(): void {
  }


}
