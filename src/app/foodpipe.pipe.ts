import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodpipe'
})
export class FoodpipePipe implements PipeTransform {

  transform(val: any, searchTearm:any,add:any): any {
    return val.filter(function(search) {
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
     
    });
  }

}
