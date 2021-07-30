import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any=""
  constructor(private ds:DataService) {
   this.user=ds.showLogedUser()
    console.log(this.user);
    
   }

  ngOnInit(): void {
  }

}
