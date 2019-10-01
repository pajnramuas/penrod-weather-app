import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-milwaukee',
  templateUrl: './milwaukee.component.html',
  styleUrls: ['./milwaukee.component.css']
})
export class MilwaukeeComponent implements OnInit {
  weather: Object;

  constructor(private apiService: ApiService) { }

  /**
  * grabs the weather data for Milwaukee on initialization
  */

  ngOnInit() {
    this.apiService.getweather("5263045").subscribe((data)=>{
      this.weather = data;
    })
  }

}
