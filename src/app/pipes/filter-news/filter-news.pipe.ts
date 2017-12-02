import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(article => article.categories.filter(category => args.filter(a => a === category).length !== 0).length !== 0)
  }

}
