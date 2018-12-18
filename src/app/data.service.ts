import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getWeather() {
    return this.http.get('http://api.apixu.com/v1/forecast.json?key=567775c950ea449eb5f112558181812&q=lagos&days=5');
  }
}
