import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../services/cart/cart-service.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService,
    private catrService: CartServiceService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {

  }

  addToCart(){
    this.catrService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }


}
