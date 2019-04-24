import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }


  //Get Stats
  getSystemData() {
    return this.http.get('http://temelectronics.co.za/hospital/levelone/getSystemByID.php?id=1');
  }

  
}
