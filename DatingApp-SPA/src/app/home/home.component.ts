import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  resitereMode = false;
  values: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): any {
    this.getValues();
  }
  registerToggle(): any {
    this.resitereMode = true;
  }
  getValues(): any {
    this.httpClient
      .get('http://localhost:5000/api/Values/GetValues')
      .subscribe(
        (response) => {
          this.values = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  cancelRegisterMode(registerMode: boolean): any{
  this.resitereMode = registerMode;
  }
}
