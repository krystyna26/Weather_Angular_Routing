import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';// <--- Routing rules imported

import { AppComponent } from './app.component';

import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';

import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    SanjoseComponent,
    SeattleComponent,
    WashingtonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule  // <--- Our routing rules
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
