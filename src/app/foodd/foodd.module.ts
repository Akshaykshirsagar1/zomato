import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltersPipe } from '../filters.pipe';





const routes:Routes=[
  {path:'',component:HomeComponent}
]
@NgModule({
  declarations: [HomeComponent,
  FiltersPipe
  ],
  imports: [
    CommonModule,
  
    FormsModule,

    RouterModule.forChild(routes),
  
  ],
  exports:[RouterModule]
})
export class FooddModule { }
