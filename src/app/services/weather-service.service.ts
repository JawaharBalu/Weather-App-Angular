import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private WeatherServices:HttpClient) { }
   

   url:string = 'http://api.weatherapi.com/v1/forecast.json?key=de0ca2709a304351ad0211143221505&q=';


   getWeather (city:string):Observable<any>{
    let currentUrl = this.url+city+'&days=5';
     return this.WeatherServices.get(currentUrl);
   }
  


}
