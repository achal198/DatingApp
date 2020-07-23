import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private httpClient: HttpClient) {
   }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.httpClient.get('http://localhost:5000/api/WeatherForecast/GetValues').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
