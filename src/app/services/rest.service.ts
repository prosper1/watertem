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
<<<<<<< HEAD

    return new Promise(resolve => {
      this.http.get('http://127.0.0.1:8000/api/?format=json').subscribe(data => {
        resolve(data);
    }, err => {
      console.log(err)
=======
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getSystemByID.php?id=1').subscribe(data => {
        resolve(data);
    }, err => {
      console.log(err);
>>>>>>> 90b561a1e15723c415fa1acd730c3038e0adc5cb
    });
  });
  }

}
