import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ApiService {
  
  constructor(private _http : Http) { }

  getWeatherInfo(city, callback) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=77054bc15c2367d8711dd80d2364997e`).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => { console.log(err); }
    );
  }
}
