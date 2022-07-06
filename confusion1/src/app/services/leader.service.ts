import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders():Leader[]{
    return LEADERS;
  }
  getleaders(id:string):Leader{
    return LEADERS.filter((promo) =>{promo.id=== id})[0];

  }
  getFeatureLeaders():Leader{
    return LEADERS.filter((promo) => promo.featured)[0];
  }
}
