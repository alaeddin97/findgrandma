import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SMSComponent implements OnInit {
 isChecked: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {

  }

}
