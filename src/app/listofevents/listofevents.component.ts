import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Event } from '../event';

@Component({
  selector: 'app-listofevents',
  templateUrl: './listofevents.component.html',
  styleUrls: ['./listofevents.component.css']
})
export class ListofeventsComponent implements OnInit {
  event: Event [];
  constructor(private userService:UserService) { }

  ngOnInit() {
    return this.userService.getEvent()     //we are taking urls from user service in which event fields present.
    .subscribe(event => this.event = event);

  }

  

}
