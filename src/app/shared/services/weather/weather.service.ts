import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Indica que é um serviço global, ou singleton
})
export class WeatherService {
  private apiKey = "6382bcc26479515eedc5eecb7474992f";

  constructor(private http: HttpClient) { } //Injeção de dependência

  //Método que consome a API de previsão do tempo: 
  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }

}
