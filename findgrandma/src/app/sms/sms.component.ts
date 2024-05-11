import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SMSComponent implements OnInit {
 isChecked: boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggle() {

  }

  navigateToMenu() {
    this.router.navigate(['menu']);
  }

}
