import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private client: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.baseUrl + 'User/GetUsers');
  }
  getUser(id): Observable<User> {
    return this.client.get<User>(this.baseUrl + 'User/GetUser/' + id);
  }
}
