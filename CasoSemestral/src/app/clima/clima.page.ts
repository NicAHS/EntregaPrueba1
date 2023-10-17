import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface WeatherResponse {
  main: {
    temp: number;
    // Otras propiedades si las hay
  };
  weather: [
    {
      icon: Blob;
      id: number;
    }
  ]
}

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  weatherTemp : any = {}
  weatherDetails: any

  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  ngOnInit() {
  }
  loadData(){
    this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${"Melipilla"}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemp = results['main']
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherTemp)
    })
  }

}



