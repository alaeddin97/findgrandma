import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ArduinoService } from '../shared/arduino.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SMSComponent implements OnInit {
 isChecked: boolean = true;
 sim:string = "25 033 861";
 freq:number = 3;
 
  constructor(private router:Router, private arduinoService: ArduinoService) { }

  ngOnInit(): void {
    this.arduinoService.getSms().subscribe(smsData => {
      this.isChecked = smsData.dosendSms;
      this.sim = smsData.phoneNumber;
      this.freq = smsData.frequency;
      console.log(smsData);
      
    })
  }

  toggle() {

  }

  navigateToMenu() {
    this.router.navigate(['menu']);
  }

  saveSim() {
    this.arduinoService.saveSim(this.isChecked, this.sim, this.freq);
  }
}
