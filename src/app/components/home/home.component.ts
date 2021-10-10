import { Component, OnInit } from '@angular/core';
import {Good} from 'src/app/interfaces/good.interface';
import { GoodsService } from './../../services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[] = [
{ name: 'Black-White' , price: 94 , photoUrl: 'assets/Black-White.jpg' },
{ name: 'Blue-Black' , price: 139 , photoUrl: 'assets/Blue-Black.jpg' },
{ name: 'Red-Black' , price: 100 , photoUrl: 'assets/Red-Black.jpg' },
{ name: 'Yellow-Black' , price: 119 , photoUrl: 'assets/Yellow-Black.jpg' }
  ]

  
  constructor(private gs: GoodsService) { }

  ngOnInit(): void {

    this.gs.getAllGoods()((data: Good[]) => this.goods = data)


  }

  addToCart(index:any) {
    console.log('added' , this.goods[index])
  }

}


