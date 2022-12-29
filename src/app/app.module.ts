import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooddModule } from './foodd/foodd.module';
import { FormsModule } from '@angular/forms';
import { FoodpipePipe } from './foodpipe.pipe';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodpipePipe,
    CartComponent,
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FooddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
