import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilwaukeeComponent } from './milwaukee/milwaukee.component'; 
import { MinneapolisComponent } from './minneapolis/minneapolis.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { HomeComponent } from './home/home.component';

/**
  * adds routing to all 4 different pages so that we can navigate between them
  */

const routes: Routes = [
  { path: 'milwaukee', component: MilwaukeeComponent },              
  { path: 'minneapolis', component: MinneapolisComponent },        
  { path: 'chicago', component: ChicagoComponent },        
  { path: 'dallas', component: DallasComponent },        
  { path: '', component: HomeComponent }        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }