import { Component, OnInit } from '@angular/core';
import { FoodservService } from '../foodserve.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fs:FoodservService) { 
    this.fs.cartSubject.subscribe((data)=>{
      this.cartqnty=data
    })
  }

  ngOnInit() {
    this.cartqntyfunction()
  }
cartqnty:number=0
cartqntyfunction(){
  if(localStorage.getItem('localcart')!=null){
 var cartcount=JSON.parse(localStorage.getItem('localcart'))
 this.cartqnty=cartcount.length
  }
}
}