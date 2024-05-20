import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  url:string = "";

  constructor(private http: HttpClient) { }

  saveGps(lat: number, lon: number, disLimit: number) {
    const body = { lat: lat, lon: lon, disLimit: disLimit};
    this.http.post(this.url,body).subscribe(data => console.log(data))
  }

  saveSim(isChecked: boolean, sim: string, freq: number) {
    const body = {isChecked: isChecked, sim: sim, freq: freq};
    this.http.post(this.url, body).subscribe();
  }

  saveAlertes(doses: Date[]) {
    this.http.post(this.url, doses).subscribe();
  }

}
