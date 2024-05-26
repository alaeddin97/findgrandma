import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  url:string = "https://findgrandma-ee022-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: HttpClient) { }

  saveGps(lat: number, lon: number, distance: number) {
    const gpsData = { lat: lat, lon: lon, distance: distance};
    this.http.put(this.url + 'gps.json',gpsData).subscribe(data => console.log(data))
  }

  getGps() {
    return this.http.get<GPS>(this.url + 'gps.json').pipe(map(data => {
      return data;
    }));
  }

  saveSim(isChecked: boolean, sim: string, freq: number) {
    const simData = {dosendSms: isChecked, phoneNumber: sim, frequency: freq};
    this.http.put(this.url + 'sim.json', simData).subscribe(data => console.log(data));
  }

  getSms() {
    return this.http.get<SMS>(this.url + 'sim.json').pipe(map(data => {
      return data;
    }));
  }

  saveAlertes(doses: Date[]) {
    this.http.put(this.url + 'alerts.json', doses).subscribe(data => console.log(data));
  }

  getAlertes() {
    return this.http.get<Date[]>(this.url + 'alerts.json').pipe(map(data => {
      return data;
    }));
  }

}

export class GPS {
  constructor(public lat:number, public lon:number, public distance:number){}
}

export class SMS {
  constructor(public dosendSms:boolean, public phoneNumber:string, public frequency:number){}
}
