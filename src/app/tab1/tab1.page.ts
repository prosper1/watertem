import { Component } from '@angular/core';
import { RestService } from './../services/rest.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
  


 
}
