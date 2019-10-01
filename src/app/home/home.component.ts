import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  milwaukee: Object;
  minneapolis: Object;
  chicago: Object;
  dallas: Object;

  constructor(private apiService: ApiService) { }

  /**
  * grabs the weather data for all four cities on initialization
  */

  ngOnInit() {
    this.apiService.getweather("5263045").subscribe((data)=>{
      this.milwaukee = data;
    })

    this.apiService.getweather("5037649").subscribe((data)=>{
      this.minneapolis = data;
    })

    this.apiService.getweather("3582383").subscribe((data)=>{
      this.chicago = data;
    })

    this.apiService.getweather("4684888").subscribe((data)=>{
      this.dallas = data;
    })
  }

}
