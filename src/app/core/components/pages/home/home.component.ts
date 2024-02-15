import { Component, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/core/models/interfaces/WeatherDatas';
import { WeatherService } from 'src/app/shared/services/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  initialCityName = "São Paulo";
  weatherDatas!: WeatherDatas; //Dados da API (operador not-null)

  constructor(private weatherService: WeatherService) {} //Injeção de dependência (Injeção do Service)

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  //Método que consome o service injetado no construtor acima
  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        console.log(response);
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas.name);
      },
      error: (error) => console.log(error),
    });
  }
}
