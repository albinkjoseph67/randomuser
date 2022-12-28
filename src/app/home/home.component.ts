import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

allUsers:any[]=[]
user:any ={}

  constructor(private api:ServiceService){ }
  ngOnInit(): void {
    this.getAllUsers();

  }

  // get all users

  getAllUsers(){
    this.api.getAllUsers().subscribe((data:any)=>{
      this.allUsers= data.users
      

    })
  }



}
