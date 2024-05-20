import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ArduinoService } from '../shared/arduino.service';

@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.component.html',
  styleUrls: ['./alertes.component.css']
})
export class AlertesComponent implements OnInit {

  isAddCreneau:boolean = false;
  doses: Date[] = [];

  constructor(private router:Router, private arduinoService: ArduinoService) { }

  ngOnInit(): void {
  }

  navigateToMenu() {
    this.router.navigate(['menu']);
  }

  saveAlertes() {
    this.arduinoService.saveAlertes(this.doses);
  }

}
