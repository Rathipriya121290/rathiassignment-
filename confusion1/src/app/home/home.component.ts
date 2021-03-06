import { Component, OnInit } from '@angular/core';
import { Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion} from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { MatListSubheaderCssMatStyler } from '@angular/material/list';
import { LeaderService } from '../services/leader.service';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  dish:Dish;
  promotion:Promotion;
leader:Leader;
  
  constructor(private dishService:DishService,private promotionService:PromotionService,private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
    .subscribe(dish =>this.dish=dish);
    this.promotionService.getFeaturedPromotion()
    .subscribe(promotion=>this.promotion=promotion);
    this.leaderService.getFeatureLeaders()
    .subscribe(leader =>this.leader=leader);
  }

}
