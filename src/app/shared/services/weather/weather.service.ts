import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Indica que é um serviço global, ou singleton
})
export class WeatherService {
  private apiKey = "d014d8490d50ec2b9893ae9fed6b100b";

  constructor(private http: HttpClient) { } //Injeção de dependência

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }

}
