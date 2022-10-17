import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = ['ford','hyundai','tata'];

  mydata()
  {
    return 'this is tuli'
  }

}
