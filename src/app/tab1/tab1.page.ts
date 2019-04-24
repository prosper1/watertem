import { Component } from '@angular/core';
import { RestService } from './../services/rest.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tanks: Observable<any>;
 
  constructor(public restService: RestService) { 
    this.tanks = this.restService.getSystemData();
  }
 
  
}
