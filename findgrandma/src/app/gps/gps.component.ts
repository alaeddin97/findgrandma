import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ArduinoService } from '../shared/arduino.service';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GPSComponent implements OnInit {

  lat:number = 0.0;
  lon:number = 0.0;
  disLimit:number = 0.0;

  constructor(private router:Router, private arduinoService: ArduinoService) { }

  ngOnInit(): void {
  }

  navigateToMenu() {
    this.router.navigate(['menu']);
  }

  saveGps() {
    this.arduinoService.saveGps(this.lat, this.lon, this.disLimit);
  }

}
