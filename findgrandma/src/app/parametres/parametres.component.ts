import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToSMS() {
    this.router.navigate(['sms']);
  }

  navigateToHoraires() {
    this.router.navigate(['horairesMedoc']);
  }

  navigateToGPS() {
    this.router.navigate(['gps']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

}
