import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { ParametresComponent } from './parametres/parametres.component';
import { SMSComponent } from './sms/sms.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GPSComponent } from './gps/gps.component';
import { AlertesComponent } from './alertes/alertes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametresComponent,
    SMSComponent,
    GPSComponent,
    AlertesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
