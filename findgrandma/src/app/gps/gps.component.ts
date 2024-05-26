import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ArduinoService, GPS } from '../shared/arduino.service';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GPSComponent implements OnInit {

  lat:number = 0;
  lon:number = 0;
  distance:number = 0;

  constructor(private router:Router, private arduinoService: ArduinoService) { }

  ngOnInit(): void {
    this.arduinoService.getGps().subscribe(gpsData => {
      this.distance = gpsData.distance;
      this.lat = gpsData.lat;
      this.lon = gpsData.lon;
      console.log(gpsData);
    })
  }

  navigateToMenu() {
    this.router.navigate(['menu']);
  }

  saveGps() {
    this.arduinoService.saveGps(this.lat, this.lon, this.distance);
  }

}
