import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ParametresComponent } from "./parametres/parametres.component";
import { SMSComponent } from "./sms/sms.component";
import { GPSComponent } from "./gps/gps.component";
import { AlertesComponent } from "./alertes/alertes.component";
import { LoginComponent } from "./login/login.component";

const appRoute:Routes=[
    {path:'',redirectTo:'/menu',pathMatch:'full'},
    
    {path:'menu',component:ParametresComponent},
    {path:'sms',component:SMSComponent},
    {path:'gps',component:GPSComponent},
    {path:'horairesMedoc',component:AlertesComponent},
    {path:'login',component:LoginComponent}

];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}