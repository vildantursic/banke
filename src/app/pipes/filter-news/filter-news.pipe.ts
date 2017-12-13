import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args[0] === 'all') {
      return value;
    } else {
      return value.filter(article => article.slug !== 'ad' ? article.categories.filter(category => args.filter(arg => arg === category).length !== 0).length !== 0 : null)
    }
  }

}
