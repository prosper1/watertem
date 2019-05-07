import { Component } from '@angular/core';
import { RestService } from './../services/rest.service';
<<<<<<< HEAD
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
=======
>>>>>>> 90b561a1e15723c415fa1acd730c3038e0adc5cb


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
<<<<<<< HEAD
  tanks:any = []

 
  constructor(public restService: RestService) { 
    this.getProducts()
    console.log(this.tanks)
  }
 
  getProducts() {
    this.restService.getSystemData().then(data => {
      this.tanks = data[0];
      console.log(this.tanks);
    });
  }
  
=======

  tanks: any = [];

  constructor(
    public restService: RestService,
  ) {
    this.getTank();
  }

  getTank() {
    this.restService.getSystemData()
    .then(data => {
      this.tanks = data;
      console.log(this.tanks);
    });
  }

>>>>>>> 90b561a1e15723c415fa1acd730c3038e0adc5cb
}
