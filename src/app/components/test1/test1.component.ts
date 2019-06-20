import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/tasks'

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  tasks:Task[]

  constructor() {
    // Used to import services
   }

  ngOnInit() {
    // All component functions here
    this.tasks = [
      {
        id:1,
        time:"10:00 am",
        text:"This is the 1 task",
        status:true
      },
      {
        id:2,
        time:"11:00 am",
        text:"This is the 2 task",
        status:false
      },
      {
        time:"12:00 am",
        text:"This is the 3 task",
        status:false
      }
    ]
  }

}
