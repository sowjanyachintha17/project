import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../../user.service';
import { Event } from '../../event'; 

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
 
})
export class EventoComponent implements OnInit {
  sectionScroll: any;

  constructor( private _router:Router,private userService:UserService ) { }

  login(){
    this._router.navigate(['/login']);
  }
  register(){
    this._router.navigate(['/register']);
  }
 
  event: Event[];
  ngOnInit() {
    return this.userService.getEvent() 
    .subscribe(event => this.event = event);
   
  }
}
