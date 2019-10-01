import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather: Object;

  constructor(private apiService: ApiService) { }

  /**
  * grabs the weather data for Chicago on initialization
  */

  ngOnInit() {
    this.apiService.getweather("3582383").subscribe((data)=>{
      this.weather = data;
    })
  }


}
