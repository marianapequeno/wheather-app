import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from 'src/app/core/models/interfaces/WeatherDatas';
import { WeatherService } from 'src/app/shared/services/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();//Para fechar o observable 'subscribe' e não ocorrer 'memory leak'
  initialCityName = "São Paulo";
  weatherDatas!: WeatherDatas; //Dados da API (operador not-null)
  searchIcon = faMagnifyingGlass; //Ícone do fontAwesome

  constructor(private weatherService: WeatherService) {} //Injeção de dependência (do Service)

  ngOnInit(): void { //Ciclo de vida que é executado uma vez quando o componente é inicializado
    this.getWeatherDatas(this.initialCityName);
  }

  //Método que consome o service injetado no construtor acima:
  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
      },
      error: (error) => console.log(error),
    });
  }

  //Método que faz a pesquisa da cidade:
  onSubmit():void {
    this.getWeatherDatas(this.initialCityName);
    console.log(this.weatherDatas);
    this.initialCityName = "";
  }

  ngOnDestroy(): void { //Ciclo de vida executado para fechar um observable
    this.destroy$.next();
    this.destroy$.complete();
  }

}
