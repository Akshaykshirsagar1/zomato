import { Component, OnInit } from '@angular/core';
import { FoodservService } from '../foodserve.service';

import { Foods } from '../shared/model/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[]=[];
term:string="";
addCart:any=[]
  constructor(private fs:FoodservService) {

   }
   

  ngOnInit() {
    this.foods=this.fs.getfood();

  }
  plus(food){
    food.qnty=food.qnty + 1
  }
  minus(food){
    food.qnty=food.qnty - 1
  }
  itemcart:any=[]
  addcart(food){
    console.log(food)
    let cartdata=localStorage.getItem('localcart')
    if(cartdata==null){
      let storedata:any=[];
      storedata.push(food)
      localStorage.setItem('localcart',JSON.stringify(storedata))
    }
    else{
      var foodid=food.id
      let index:number=-1
      this.itemcart=JSON.parse(localStorage.getItem('localcart'));
      for(let i=0; i<this.itemcart.length; i++){
        if(parseInt(foodid)=== parseInt(this.itemcart[i].id)){
          this.itemcart[i].qnty=food.qnty
          index=i;
          break;

        }
        if(index== -1){
          this.itemcart.push(food);
          localStorage.setItem('localcart',JSON.stringify(this.itemcart))
        }
        else{
          localStorage.setItem('localcart',JSON.stringify(this.itemcart))
        }
      }
      this.cartnumberfunction();
    }
    
  }
 cartnumber:number=0;
 cartnumberfunction(){
  var cartvalue=JSON.parse(localStorage.getItem('localcart'));
  this.cartnumber=cartvalue.length;
  this.fs.cartSubject.next(this.cartnumber)
  
 }
  
namesearch:string="";
}