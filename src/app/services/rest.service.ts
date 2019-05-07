import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://temelectronics.co.za/hospital/levelone/';

  constructor(public http: HttpClient) { }


  // Get Stats
  getSystemData() {

    return new Promise(resolve => {
      this.http.get('http://127.0.0.1:8000/api/?format=json').subscribe(data => {
        resolve(data);
    }, err => {
      console.log(err)

    });
  });
  }

}
