import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  isLoggedIn = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToMenu() {
    this.router.navigate(['menu']);
  }

  login() {    
    if (this.username === 'Yassine' && this.password === 'ALA12345ala@') {
      this.isLoggedIn = false;
      this.navigateToMenu();
    } else {
      
    }
  }

}
