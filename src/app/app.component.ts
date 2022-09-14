import { Component, Input, OnInit, AfterViewInit,AfterViewChecked } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  constructor(private weatherService: WeatherServiceService) { }
  cities: string[] = ['CHENNAI', 'TORONTO', 'THUNDER BAY'];
  data: any;
  currentTemperature!: any;
  imaged: any;
  text!: any;
  forecastDays!: any;
  forecastData: any;
  currentCity!: any;
  currentFeelslike:any;
  forecastAvg:any;
  ngOnInit(): void {
    
    this.weather('CHENNAI');
    this.colorChange;

  }

  weather(city: any) {
      
    return this.weatherService.getWeather(city).subscribe((response: any) => {

      this.data = response;
     
      this.currentTemperature = this.data.current.temp_c + '°C';
      this.imaged = this.data.current.condition.icon;
      this.text = this.data.current.condition.text;
      this.forecastDays = this.data.forecast.forecastday;
      this.currentFeelslike = this.data.current.feelslike_c;
      this.forecastAvg = this.forecastDays.day;
      this.colorChange(city);
      console.log(this.forecastAvg)
    })

  }

  colorChange(city: string){
  
    var curentCityElement = document.getElementById(city);
    curentCityElement!.style.color = 'white';
    curentCityElement!.style.fontWeight = 'bold';
    curentCityElement!.style.fontSize ='35px';
    console.log('colorchange function')
    var notSelected = this.cities.filter((cities) => {
      return cities !== city
    });

    for (var cities of notSelected) {
      var notSelectedCities = document.getElementById(cities);
      notSelectedCities!.style.fontWeight = 'light';
      notSelectedCities!.style.fontSize = 'small'
      
     
      
    }
  }
}



