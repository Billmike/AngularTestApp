import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  chart = [];

  constructor(private weather: DataService) { }

  ngOnInit() {
    return this.weather.getWeather().subscribe(result => {
      let weatherResult: any = result;
      let min_temp = weatherResult.forecast.forecastday.map(response => response.day.mintemp_c);
      let max_temp = weatherResult.forecast.forecastday.map(response => response.day.maxtemp_c);
      let date = weatherResult.forecast.forecastday.map(response => response.date)

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: date,
          datasets: [
            {
              label: 'Max Temperature',
              data: max_temp,
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
            },
            {
              label: 'Min Temperature',
              data: min_temp,
              backgroundColor: [
                'rgba(100, 15, 102, 0.2)',
                'rgba(100, 15, 102, 0.2)',
                'rgba(100, 15, 102, 0.2)',
                'rgba(100, 15, 102, 0.2)',
                'rgba(100, 15, 102, 0.2)',
                'rgba(100, 15, 102, 0.2)',
            ],
            borderColor: [
              'rgba(200,99,132,1)',
              'rgba(200,99,132,1)',
              'rgba(200,99,132,1)',
              'rgba(200,99,132,1)',
              'rgba(200,99,132,1)',
          ],
          borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
      })
    })
  }

}
