import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  OnRegister(event, username: string, password: string, email: string) {
    event.preventDefault();
    this.auth.getdata(username, password, email).
    subscribe(data => {
      if(data.success) {
        this.route.navigate(['login']);
      }else {
        this.route.navigate(['register']);
      }
    });
  }

}
