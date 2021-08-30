import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import {HttpClientModule} from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { EditEventComponent } from './edit-event/edit-event.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog'
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ListEventsComponent,
    AddEventComponent,
    EditEventComponent,
    NavbarComponent
  ],
  entryComponents:[EditEventComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatDialogModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
