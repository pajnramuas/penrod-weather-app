import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private city: string;
  API_KEY = '33695677891ef46dcaccc8db0a6b54ec';

  constructor(private httpClient: HttpClient) { }

  /**
  * calls get to grab the weather data from the api
  */

  public getweather(value: string){
    this.city = value;
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.city}&appid=${this.API_KEY}&units=imperial`);
  }
}
