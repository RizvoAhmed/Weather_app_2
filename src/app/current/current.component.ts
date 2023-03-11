import { WeatherService } from './../weather.service';
import { Component } from '@angular/core';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent {
  myWeather?: CurrentWeather;
  location: any = undefined;
  constructor(private ws: WeatherService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.ws.localWeather(lat, lon).subscribe((data) => {
        console.log(data);
        this.myWeather = data;
      });
    });
  }
}
