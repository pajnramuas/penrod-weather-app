import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-minneapolis',
  templateUrl: './minneapolis.component.html',
  styleUrls: ['./minneapolis.component.css']
})
export class MinneapolisComponent implements OnInit {

  weather: Object;

  constructor(private apiService: ApiService) { }

  /**
  * grabs the weather data for Minneapolis on initialization
  */

  ngOnInit() {
    this.apiService.getweather("5037649").subscribe((data)=>{
      this.weather = data;
    })
  }


}
