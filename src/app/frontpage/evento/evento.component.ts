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
c
  login(){
    this._router.navigate(['/login']); //connection to login component.
  }
  register(){
    this._router.navigate(['/register']);//connection to register component.
  }
 
  event: Event[];
  ngOnInit() {
    return this.userService.getEvent() //user services has url and we are using that links here.
    .subscribe(event => this.event = event);
   
  }
}
