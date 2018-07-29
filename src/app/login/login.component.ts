import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = "";
  login: any;
  

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {

  }

  onSubmit(event, username: string, password: string) {
    event.preventDefault();
    event.stopPropagation();
    this.auth.getUserlogin(username, password).
      subscribe(data => {
        localStorage.setItem('token', data.token);
        this.route.navigate(['quiz']);
      })
  }

}
