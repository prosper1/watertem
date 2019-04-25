import { Component } from '@angular/core';
import { RestService } from './../services/rest.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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

}
