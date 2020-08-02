import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {}

  login(model: any): any {
    return this.http.post(this.baseUrl + 'Auth/Login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }
  register(model: any): any {
    return this.http.post(this.baseUrl + 'Auth/Register', model);
  }
}