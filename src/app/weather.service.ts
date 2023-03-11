import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from './current-weather';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  weatherNow() {
    // return this.current;
  }

  localWeather(lat: string, lon: string): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8ef9d8ec874aef34bbb20fe2affb5cc5&units=imperial`
    );
  }
}
