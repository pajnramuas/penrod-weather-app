import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  weather: Object;

  constructor(private apiService: ApiService) { }

  /**
  * grabs the weather data for all Dallas on initialization
  */

  ngOnInit() {
    this.apiService.getweather("4684888").subscribe((data)=>{
      this.weather = data;
    })
  }

}
