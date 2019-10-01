import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MilwaukeeComponent } from './milwaukee/milwaukee.component';
import { MinneapolisComponent } from './minneapolis/minneapolis.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { HomeComponent } from './home/home.component';

/**
  * imports all of the needed components and modules for the weather app
  */

@NgModule({
  declarations: [
    AppComponent,
    MilwaukeeComponent,
    MinneapolisComponent,
    ChicagoComponent,
    DallasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
