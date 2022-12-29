import { Component, OnInit } from '@angular/core';
import { FoodservService } from '../foodserve.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private fs:FoodservService) { 
    this.cartdetails();
    this.loadcart();
  }

  ngOnInit() {
  }
  getcartdetails:any=[]
cartdetails(){
if(localStorage.getItem('localcart')){
this.getcartdetails=JSON.parse(localStorage.getItem('localcart'));
console.log(this.getcartdetails)
}
}
inc(id,qnty){
for(let i=0; i<this.getcartdetails.length;i++){
  if(this.getcartdetails[i].id===id){
    this.getcartdetails[i].qnty=parseInt(qnty)+1
  }
  localStorage.setItem('localcart',JSON.stringify(this.getcartdetails))
  this.loadcart();
}
}
dec(id,qnty){
  for(let i=0; i<this.getcartdetails.length;i++){
    if(this.getcartdetails[i].id===id){
      if(qnty!=1)
      this.getcartdetails[i].qnty=parseInt(qnty)-1
    }
    localStorage.setItem('localcart',JSON.stringify(this.getcartdetails))
    this.loadcart();
  }
  
}
total:number=0;

loadcart(){
  if(localStorage.getItem('localcart')){
    this.getcartdetails=JSON.parse(localStorage.getItem('localcart'))
     this.total=this.getcartdetails.reduce(function(a,b){
      return a +(b.price*b.qnty)
    },0)
  }
}
remove(){
  localStorage.removeItem('localcart');
  this.getcartdetails=[];
  this.total=0
  this.cartnumber=0
  this.fs.cartSubject.next(this.cartnumber)
}
dlt(element){
  console.log(element);
  this.getcartdetails=JSON.parse(localStorage.getItem('localcart'));
  for(let i=0;i<this.getcartdetails.length;i++){
    if(this.getcartdetails[i].id===element){
      this.getcartdetails.splice(i,1);
      localStorage.setItem('localcart',JSON.stringify(this.getcartdetails))
      this.loadcart();
      this.cartnumberfunction();
    }
  }
}
cartnumber:number=0;
 cartnumberfunction(){
  var cartvalue=JSON.parse(localStorage.getItem('localcart'));
  this.cartnumber=cartvalue.length;
  this.fs.cartSubject.next(this.cartnumber)
  
 }
}