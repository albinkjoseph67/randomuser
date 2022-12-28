import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-randomuser',
  templateUrl: './randomuser.component.html',
  styleUrls: ['./randomuser.component.css']
})
export class RandomuserComponent implements OnInit{
  allUsers:any[]=[]
user:any ={}

  constructor(private api:ServiceService , private router:Router){}
  ngOnInit():void{
    this.getAllUsers();

  }

  // get all users

  getAllUsers(){
    this.api.getAllUsers().subscribe((data:any)=>{
      this.allUsers= data.users
      this.randomUser();

    })
  }

  randomUser(){
    var index= Math.floor(Math.random()  * this.allUsers.length );
    this.user=this.allUsers[index]

  }

}
